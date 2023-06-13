import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Chatbot from '@/components/ChatBot';
import { GetServerSideProps } from 'next';

const isLocalHost = () => {
    if (typeof window !== 'undefined') {
        return Boolean(
            window.location.hostname === 'localhost' ||
            // [::1] is the IPv6 localhost address.
            window.location.hostname === '[::1]' ||
            // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
        );
    }

    return false;
};

const isFromSameDomain = () => {
    if (typeof window !== 'undefined') {
        if (window.parent) {
            return window.location.origin === window.parent.location.origin;
        }
    }

    return true;
};

const ChatBotByUsername = ({ username }: { username: string }) => {
    const router = useRouter();

    useEffect(() => {
        if (!isLocalHost() && !isFromSameDomain()) {
            router.push('/404');
        }
    }, [router, username]);

    return <Chatbot username={username as string} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;
    const username = params?.username;

    return {
        props: {
            username,
        },
    };
};

ChatBotByUsername.loadInternalScript = false;
ChatBotByUsername.hideHeader = true;
ChatBotByUsername.hideFooter = true;

export default ChatBotByUsername;
