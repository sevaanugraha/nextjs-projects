import { useTranslation } from 'react-i18next'
import { CircleBackground } from '@/components/CircleBackground.jsx'
import { Container } from '@/components/Container.jsx'

export function CallToAction() {
  const { t } = useTranslation();

  return (
    <section
      id="get-free-shares-today"
      className="sm:py-28 relative py-20 overflow-hidden bg-gray-900"
    >
      <div className="left-20 top-1/2 sm:left-1/2 sm:-translate-x-1/2 absolute -translate-y-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="sm:text-center max-w-md mx-auto">
          <h2 className="sm:text-4xl text-3xl font-semibold tracking-tight text-white">
          {t("Start Your AI Journey Today")}
          </h2>
          <p className="mt-4 text-xl font-light leading-9 text-gray-300">
          {t("It takes just a few minutes to sign up. Register on our platform and create your personalized chatbot today, and we'll provide you with the essential tips to make your first AI interaction a remarkable success.")}
          </p>
        </div>
      </Container>
    </section>
  )
}
