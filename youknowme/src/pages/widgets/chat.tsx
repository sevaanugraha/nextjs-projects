import React from 'react'
import axios from 'axios';
import Chatbot from "@/components/ChatBot"
import { environmentVariables } from '@/utility/constants';

const POST_MESSAGE_CHANNEL_KEY = "POST_MESSAGE_CHANNEL_KEY"

// MESSAGE KEYS
const SEND_CHAT_BOT_DETAILS_MESSAGE_KEY = "SEND_CHAT_BOT_DETAILS_MESSAGE_KEY"
const TOGGLE_CHAT_BOT_DETAILS_MESSAGE_KEY = "TOGGLE_CHAT_BOT_DETAILS_MESSAGE_KEY"
const LOAD_CHAT_BOT_DETAILS_MESSAGE_KEY = "LOAD_CHAT_BOT_DETAILS_MESSAGE_KEY"
const ERROR_CHAT_BOT_DETAILS_MESSAGE_KEY = "ERROR_CHAT_BOT_DETAILS_MESSAGE_KEY"

const events = {
    send: (type = "", data = {}) => {
        const message = {
            source: POST_MESSAGE_CHANNEL_KEY,
            type,
            data,
        };

        if (window.parent) {
            return window.parent.postMessage(
                JSON.parse(JSON.stringify(message)),
                "*"
            );
        }
    },
    on: (type = "", callback: (e: any) => void) => {
        return window.addEventListener("message", (e) => {
            if (e?.data?.source === POST_MESSAGE_CHANNEL_KEY) {
                const hasEvent = e?.data?.type === type;

                if (hasEvent) {
                    callback(e.data.data);
                }
            }
        });
    },
};

const throwError = (error: any) => events.send(ERROR_CHAT_BOT_DETAILS_MESSAGE_KEY, error)

const validate = async (secretKey: string, websiteUrl: string) => {
    const baseUrl = environmentVariables.apiUrl;

    const response = await axios.post(`${baseUrl}/api/v1/secret-key/validate-secret-key`, {
        secretKey,
        websiteUrl,
    });

    return response.data;
}

const getChatBotDetails = async (secretKey: string) => {
    const baseUrl = environmentVariables.apiUrl;
    const response = await axios.get(`${baseUrl}/api/v1/secret-key/get-chatbot/${secretKey}`);
    return response.data;
}

interface IInitialDataFromWebsite {
    secretKey: string,
    websiteUrl: string
}

const ChatWidget = () => {
    const firstRender = React.useRef(true)
    const [isValidWebsiteRequest, setIsValidWebsiteRequest] = React.useState(false);
    const [initialDataFromWebsite, setInitialDataFromWebsite] = React.useState<IInitialDataFromWebsite>();
    const [chatBotDetails, setChatBotDetails] = React.useState<any>()

    React.useEffect(() => {
        setTimeout(() => {
            if (firstRender.current) {
                events.on(SEND_CHAT_BOT_DETAILS_MESSAGE_KEY, (data) => {
                    setInitialDataFromWebsite(data)
                })
    
                firstRender.current = false
            }
        }, 0)
    }, [])

    React.useEffect(() => {
        if (initialDataFromWebsite) {
            if (initialDataFromWebsite.secretKey && initialDataFromWebsite.websiteUrl) {
                (async () => {
                    try {
                        const validation = await validate(initialDataFromWebsite.secretKey, initialDataFromWebsite.websiteUrl);

                        if (validation.isValid) {
                            const chatBotDetails = await getChatBotDetails(initialDataFromWebsite.secretKey)
                            setChatBotDetails(chatBotDetails)
                            setIsValidWebsiteRequest(true)
                        }
                    } catch (e) {
                        throwError(e)
                    }
                })()
            }
        }
    }, [initialDataFromWebsite])

    const onClose = () =>  events.send(TOGGLE_CHAT_BOT_DETAILS_MESSAGE_KEY)
    const onLoad = (data: any) => events.send(LOAD_CHAT_BOT_DETAILS_MESSAGE_KEY, data)

    if (isValidWebsiteRequest) {
        return (
            <Chatbot
                username={chatBotDetails?.chatbot?.username as string}
                onClose={onClose}
                onLoad={onLoad}
            />
        )
    }

    return null
}

ChatWidget.loadInternalScript = false
ChatWidget.hideHeader = true
ChatWidget.hideFooter = true

export default ChatWidget
