import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/Button.jsx'
import { Container } from '@/components/Container.jsx'


// const creditsConfig = [
//   {
//     id: 1,
//     credits: "100",
//     price: "9",
//     color: '#becada'
//   },
//   {
//     id: 3,
//     credits: "5000",
//     price: "49",
//     color: '#05b6d3',
//     recommended: true
//   },
//   {
//     id: 2,
//     credits: "1000",
//     price: "19",
//     color: '#becada'
//   },
// ];

const plans = [
  {
    name: '100 credits',
    featured: false,
    price: { Monthly: '$9', Annually: '$9' },
    button: {
      label: 'Buy credits',
      href: '/sign-up',
    },
    features: [],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: '5000 credits',
    featured: true,
    price: { Monthly: '$49', Annually: '$49' },
    button: {
      label: 'Buy credits',
      href: '/sign-up',
    },
    features: [],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: '1000 credits',
    featured: false,
    price: { Monthly: '$19', Annually: '$19' },
    button: {
      label: 'Buy credits',
      href: '/sign-up',
    },
    features: [],
    logomarkClassName: 'fill-cyan-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
}) {
  const { t } = useTranslation(); 

  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 h-full',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-2xl font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {t(`${name}`)}
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-base',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-2">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex items-center py-4">
              <CheckIcon
                className={clsx(
                  'h-8 w-8 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4 text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-2"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {t(`${button.label}`)}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')
  const { t } = useTranslation();  

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="sm:py-32 py-20 bg-gray-100 border-t border-gray-200"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-semibold tracking-tight text-gray-900"
          >
            {t("Flat pricing, no management fees.")}
          </h2>
          <p className="mt-2 text-xl font-light leading-9 text-gray-600">
            {t("Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.")}
          </p>
        </div>

        {/* <div className="flex justify-center mt-8">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2"
            >
              {['Monthly', 'Annually'].map((period) => (
                <RadioGroup.Option
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                    period === 'Monthly'
                      ? 'rounded-l-lg'
                      : '-ml-px rounded-r-lg'
                  )}
                >
                  {period}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)]'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))]'
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Annually' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 grid items-start max-w-2xl grid-cols-1 mx-auto mt-12">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>

        <div className="sm:text-center max-w-3xl mx-auto mt-8">
          <p className="text-xl font-light leading-9 text-gray-600">
            {t("Are you looking for more?")} <Link className="text-cyan-500 underline" href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_URL}`}>{t("contact us")}</Link>.
          </p>
        </div>
      </Container>
    </section>
  )
}
