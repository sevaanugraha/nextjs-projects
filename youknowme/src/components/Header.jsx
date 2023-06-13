import Link from 'next/link';
import { useTranslation,  } from 'react-i18next';
import { Popover } from '@headlessui/react';

import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/Button.jsx';
import { Container } from '@/components/Container.jsx';
import { Logo } from '@/components/Logo.jsx';
import { NavLinks } from '@/components/NavLinks.jsx';


function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M17 14l-5-5-5 5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
}

export function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-4 lg:py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="ml-[-16px] mr-2 h-16 w-16" />
            </Link>
            <div className="lg:flex lg:gap-10 hidden">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="w-6 h-6" />
                      ) : (
                        <MenuIcon className="w-6 h-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="bg-gray-300/60 backdrop-blur fixed inset-0 z-0"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="rounded-b-2xl bg-gray-50 shadow-gray-900/20 absolute inset-x-0 top-0 z-0 px-6 pt-32 pb-6 origin-top shadow-2xl"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#features">{t("Features")}</MobileNavLink>
                            <MobileNavLink href="#pricing">{t("Pricing")}</MobileNavLink>
                            <MobileNavLink href="#faqs">{t("FAQs")}</MobileNavLink>
                          </div>
                          <div className="flex flex-col gap-4 mt-8">
                            <select
                              onChange={(e) => changeLanguage(e.target.value)}
                              className="outline-2 outline-offset-2 hover:border-gray-400 bg-inherit sm:text-sm sm:leading-6 justify-center px-4 py-2 text-base text-gray-700 transition-colors border border-gray-300 rounded-lg"
                              value={i18n.language}
                            >
                              <option value="en">English</option>
                              <option value="ja">日本語</option>
                              <option value="fr">Français</option>
                            </select>
                            <Button href="https://app.youknowme.xyz/" variant="outline">
                              {t("Log in")}
                            </Button>
                            <Button href="/sign-up">{t("Register")}</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center space-x-4">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-300 hover:border-gray-400 sm:text-sm sm:leading-6 lg:block bg-inherit flex-1 hidden py-2 pl-3 pr-10 text-gray-700 transition-colors border-0 border-gray-300 rounded-md cursor-pointer"
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="fr">Français</option>
            </select>
            </div>

            <Button href="https://app.youknowme.xyz/" variant="outline" className="lg:block hidden">
              {t('Log in')}
            </Button>

            <Button href="/sign-up" className="lg:block hidden">
              {t("Register")}
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
