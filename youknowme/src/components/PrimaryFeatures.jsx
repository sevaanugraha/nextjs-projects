import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { useDebouncedCallback } from 'use-debounce'
import { AppScreen } from '@/components/AppScreen.jsx'
import { CircleBackground } from '@/components/CircleBackground.jsx'
import { Container } from '@/components/Container.jsx'
import { PhoneFrame } from '@/components/PhoneFrame.jsx'
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from '@/components/StockLogos'


const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Personalized AI Conversations',
    description:
      "Uniquely adapt each chatbot to your business with our custom content training. The AI learns from your inputs to provide accurate and personalized responses to your visitors' questions.",
    icon: DeviceUserIcon,
    screen: InviteScreen,
  },
  {
    name: 'Instant Customer Support',
    description:
      "Eliminate waiting time with our chatbot's instant response capabilities. Provide round-the-clock support to your visitors, ensuring their queries are answered immediately, anytime, anywhere.",
    icon: DeviceNotificationIcon,
    screen: StocksScreen,
  },
  {
    name: 'Easy Integration with SDK',
    description:
      "Seamlessly embed our chatbot into your existing website with our easy-to-use SDK. Just a few lines of code are all you need to integrate our AI-powered chatbot, making the process stress-free and straightforward.",
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
  {
    name: 'Unique QR Code Access',
    description:
      'Enable easy access to your chatbot with a unique QR code. Customers can instantly start a conversation by scanning the QR code, redirecting them straight to your personalized chatbot.',
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
  {
    name: 'Insightful Analytics',
    description:
      "Understand your customers better with our chatbot's data analytics feature. Analyze interaction trends, most asked queries, customer satisfaction levels, and more to constantly improve your offerings.",
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
  {
    name: 'Multilingual Support',
    description:
      "Broaden your reach with our multilingual chatbot. Cater to customers worldwide by interacting in their preferred language, thus enhancing their user experience.",
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function InviteScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Invite people</AppScreen.Title>
        <AppScreen.Subtitle>
          Get tips <span className="text-white">5s sooner</span> for every
          invite.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              { label: 'Full name', value: 'Albert H. Wiggin' },
              { label: 'Email address', value: 'awiggin@chase.com' },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500">{field.label}</div>
                <div className="pb-2 mt-2 text-sm text-gray-900 border-b border-gray-200">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-cyan-500 px-3 py-2 mt-6 text-sm font-semibold text-center text-white rounded-lg">
            Invite person
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function StocksScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Stocks</AppScreen.Title>
        <AppScreen.Subtitle>March 9, 2022</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-gray-100">
          {[
            {
              name: 'Laravel',
              price: '4,098.01',
              change: '+4.98%',
              color: '#F9322C',
              logo: LaravelLogo,
            },
            {
              name: 'Tuple',
              price: '5,451.10',
              change: '-3.38%',
              color: '#5A67D8',
              logo: TupleLogo,
            },
            {
              name: 'Transistor',
              price: '4,098.41',
              change: '+6.25%',
              color: '#2A5B94',
              logo: TransistorLogo,
            },
            {
              name: 'Diageo',
              price: '250.65',
              change: '+1.25%',
              color: '#3320A7',
              logo: DiageoLogo,
            },
            {
              name: 'StaticKit',
              price: '250.65',
              change: '-3.38%',
              color: '#2A3034',
              logo: StaticKitLogo,
            },
            {
              name: 'Statamic',
              price: '5,040.85',
              change: '-3.11%',
              color: '#0EA5E9',
              logo: StatamicLogo,
            },
            {
              name: 'Mirage',
              price: '140.44',
              change: '+9.09%',
              color: '#16A34A',
              logo: MirageLogo,
            },
            {
              name: 'Reversable',
              price: '550.60',
              change: '-1.25%',
              color: '#8D8D8D',
              logo: ReversableLogo,
            },
          ].map((stock) => (
            <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full"
                style={{ backgroundColor: stock.color }}
              >
                <stock.logo className="w-10 h-10" />
              </div>
              <div className="flex-auto text-sm text-gray-900">
                {stock.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-gray-900">
                  {stock.price}
                </div>
                <div
                  className={clsx(
                    'text-xs leading-5',
                    stock.change.startsWith('+')
                      ? 'text-cyan-500'
                      : 'text-gray-500'
                  )}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function InvestScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Buy $LA</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-white">$34.28</span> per share
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              { label: 'Number of shares', value: '100' },
              {
                label: 'Current market price',
                value: (
                  <div className="flex">
                    $34.28
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#06B6D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ),
              },
              { label: 'Estimated cost', value: '$3,428.00' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between pb-4 border-b border-gray-100"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="bg-cyan-500 px-3 py-2 text-sm font-semibold text-center text-white rounded-lg">
              Buy shares
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  const { t } = useTranslation();

  return (
    <Tab.Group
      as="div"
      vertical
    >
      <Tab.List className="md:grid-cols-2 lg:grid-cols-3 relative z-10 grid items-center w-full grid-cols-1 gap-8">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="rounded-2xl border-gray-800/30 hover:bg-gray-800/30 relative h-full transition-colors border-2"
          >
            <div className="relative z-10 px-8 py-10">
              <feature.icon className="w-10 h-10" />
              <h3 className="mt-6 text-xl font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="rounded-2xl absolute inset-0" />
                  {t(`${feature.name}`)}
                </Tab>
              </h3>
              <p className="mt-3 text-lg font-light text-gray-400">
               {t(`${feature.description}`)}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])
  const { t } = useTranslation();

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
           <div
           key={featureIndex}
           ref={(ref) => (slideRefs.current[featureIndex] = ref)}
           className="snap-center sm:px-6 flex-none w-full px-4"
         >
           <div className="relative z-10 px-8 py-10">
             <feature.icon className="w-10 h-10" />
             <h3 className="mt-6 text-xl font-semibold text-white">
               <div className="text-left [&:not(:focus-visible)]:focus:outline-none">
                 <span className="rounded-2xl absolute inset-0" />
                 {t(`${feature.name}`)}
               </div>
             </h3>
             <p className="mt-3 text-lg font-light text-gray-400">
              {t(`${feature.description}`)}
             </p>
           </div>
         </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  const { t } = useTranslation();
  
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="sm:py-32 py-20 bg-gray-900"
    >
      <Container>
        <div className="lg:mx-0 lg:max-w-3xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
              {t("Your own AI chatbot")}
          </h2>
          <p className="mt-2 text-xl font-light leading-9 text-gray-400">
            {t("Everything you need to create your own AI Chatbot. Add your details and let your chatbot answer questions for you.")}
          </p>
        </div>
      </Container>
      <div className="md:hidden mt-16">
        <FeaturesMobile />
      </div>
      <Container className="md:mt-16 md:block hidden">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
