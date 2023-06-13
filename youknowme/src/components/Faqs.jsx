import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/Container.jsx'

const faqs = [
  [
    {
      question: 'What is YouKnowMe?',
      answer:
        'YouKnowMe is a service that lets you create personalized AI chatbots. Our platform uses advanced AI technology to train chatbots on your specific content, allowing them to answer visitor queries instantly and accurately. Whether for personal use or business, YouKnowMe is designed to revolutionize your online interactions.',
    },
    {
      question: 'How do I train my chatbot?',
      answer:
        "Training your chatbot is easy with YouKnowMe. Once you've created your chatbot, you can feed it by uploading PDF, adding custom contents in customer dashboard. The chatbot will learn from this information and use it to answer questions from users.",
    },
    {
      question: 'Can I give my chatbots instructions?',
      answer:
        "Absolutely! Our chatbots are designed to follow your instructions, which can include guidelines on how to respond to specific questions, the tone of language to use, and more. You have complete control over the chatbot's behavior, ensuring it aligns with your personal or brand image.",
    },
  ],
  [
    {
      question: 'Where is my data stored, Is it secured?',
      answer:
        'Your data is stored on secure servers AWS and pinecone vector DB. We adhere to strict privacy and security standards to ensure your information is protected at all times. You retain full ownership of your data, and we will not use it for any purpose other than to provide the services agreed upon',
    },
    {
      question: 'How do I add my chatbot to my website?',
      answer:
        "Adding your chatbot to your website is a breeze with our easy-to-use SDK. After creating and training your chatbot, you'll receive a few lines of code that you can simply paste into your website's HTML. We also provide a unique QR code for each chatbot, enabling easy access for your users.",
    },
    {
      question: 'Which GPT version does it use?',
      answer:
        'YouKnowMe utilizes the GPT-4 model, one of the latest and most advanced language models available as of the time of our last update. This ensures that our chatbots provide highly accurate and contextually relevant responses.',
    },
  ],
  [
    {
      question: 'Is youknowme free to use? How can we deposit credit?',
      answer:
        'Customers need to add credits to use youknowme. Each requests from visitor will deduct one credit. We have options of recharging credit, you can choose one of them and add your credit.',
    },
    {
      question: 'Do I need a chatGPT account to use YouKnowMe?',
      answer:
        'Nope! YouKnowMe is a standalone app that gives you the full power of ChatGPT inside of a beautiful interface with additional features that you can’t get with OpenAI’s native ChatGPT app.',
    },
    {
      question: 'How often are new features and updates added to YouKnowMe?',
      answer:
        'We continuously work on improving YouKnowMe and adding new features to provide a better user experience. While there isnt a fixed schedule for updates, we recommend following our user dashboard to stay informed about new features and improvements.',
    },
  ],
]

export function Faqs() {
  const { t } = useTranslation();

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="sm:py-32 py-20 border-t border-gray-200"
    >
      <Container>
        <div className="lg:mx-0 max-w-2xl mx-auto">
          <h2
            id="faqs-title"
            className="text-3xl font-semibold tracking-tight text-gray-900"
          >
            {t("Frequently asked questions")}
          </h2>
          <p className="mt-2 text-gray-600 text-xl font-light leading-9">
            {t("If you have anything else you want to ask,")}{' '}
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_URL}`}
              className="text-cyan-600 underline"
            >
              {t("reach out to us")}
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="sm:mt-20 lg:max-w-none lg:grid-cols-3 grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-xl font-semibold leading-8 text-gray-900">
                      {t(`${faq.question}`)}
                    </h3>
                    <p className="mt-4 text-lg font-light text-gray-700">{t(`${faq.answer}`)}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
