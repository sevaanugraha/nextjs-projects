import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/Container.jsx';
import { Logomark } from '@/components/Logo.jsx';
import { NavLinks } from '@/components/NavLinks.jsx';


export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="gap-y-12 lg:flex-row lg:items-center lg:py-16 flex flex-col items-start justify-between pt-16 pb-6">
          <div className="xl:flex-row xl:justify-between flex flex-col items-center justify-start w-full">
            <div className="flex items-center justify-start">
              <Logomark className="fill-cyan-500 flex-none w-16 h-16" />

              <div className="ml-4">
                <p className="font-poppins text-3xl font-bold tracking-wider">
                  YouKnow<span className="text-cyan-500">Me</span>
                </p>

                <p className="mt-1 text-lg font-light leading-3">{t("ChatGPT for everyone")}.</p>
              </div>
            </div>
            <nav className="mt-11 flex flex-wrap justify-center gap-8">
              <NavLinks footer={true} />
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200">
          <p className="md:mt-0 mt-6 text-lg font-light text-gray-500">
            &copy; {new Date().getFullYear()} YouKnowMe. {t("All rights reserved")}. {t("Made by")} <Link href='https://twitter.com/_anandstha_' target='__blank' className='text-cyan-500 underline'>Anand</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
