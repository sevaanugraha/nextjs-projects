import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue } from 'framer-motion'
import {  ArrowRightIcon } from '@heroicons/react/24/outline';

import { AppScreen } from '@/components/AppScreen.jsx'
import { Button } from '@/components/Button.jsx'
import { Container } from '@/components/Container.jsx'
import { PhoneFrame } from '@/components/PhoneFrame.jsx'


function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="animate-spin-slow absolute inset-0 w-full h-full"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="animate-spin-reverse-slower absolute inset-0 w-full h-full"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#13B5C8" />
          <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#06b6d4', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  )
}

function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activePriceIndex = activePointIndex ?? prices.length - 1
  let activeValue = prices[activePriceIndex]
  let previousValue = prices[activePriceIndex - 1]
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="text-xs leading-6 text-gray-500">
              Tailwind Labs, Inc.
            </div>
            <div className="text-sm text-gray-900">$CSS</div>
            <svg viewBox="0 0 24 24" className="w-6 h-6 ml-auto" fill="none">
              <path
                d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="pt-5 mt-3 border-t border-gray-200">
            <div className="flex items-baseline gap-2">
              <div className="tabular-nums text-2xl tracking-tight text-gray-900">
                {activeValue.toFixed(2)}
              </div>
              <div className="text-sm text-gray-900">USD</div>
              {percentageChange && (
                <div
                  className={clsx(
                    'ml-auto text-sm tabular-nums tracking-tight',
                    percentageChange >= 0 ? 'text-cyan-500' : 'text-gray-500'
                  )}
                >
                  {`${
                    percentageChange >= 0 ? '+' : ''
                  }${percentageChange.toFixed(2)}%`}
                </div>
              )}
            </div>
            <div className="flex gap-4 mt-6 text-xs text-gray-500">
              <div>1D</div>
              <div>5D</div>
              <div className="text-cyan-600 font-semibold">1M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>5Y</div>
            </div>
            <div className="bg-gray-50 ring-1 ring-inset ring-black/5 mt-3 rounded-lg">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="bg-cyan-500 px-4 py-2 mt-4 text-sm font-semibold text-center text-white rounded-lg">
              Trade
            </div>
            <div className="mt-3 text-sm divide-y divide-gray-100">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Open</div>
                <div className="font-medium text-gray-900">6,387.55</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Closed</div>
                <div className="font-medium text-gray-900">6,487.09</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Low</div>
                <div className="font-medium text-gray-900">6,322.01</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}

export function Hero() {

  const { t } = useTranslation();

  return (
    <div className="py-2 md:py-16 lg:pb-32 xl:pb-36 lg:py-12 overflow-hidden">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 ">
          <div className="lg:col-span-7 lg:max-w-none lg:my-16 xl:col-span-6 relative z-10 max-w-2xl mx-auto my-0">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            {t("YouKnowMe: Unleashing Your Personal AI Assistant")}
            </h1>
            <p className="mt-6 text-xl font-light leading-9 text-gray-600">
                  {t("Transform your customer interactions with our AI-powered chatbot. Tailored to your unique content, our chatbot provides immediate, personalized responses to your visitors' queries, boosting engagement and driving conversions.")}
            </p>
            <div className="gap-x-6 gap-y-4 flex flex-wrap mt-8">
              <Button
              href="/sign-up"
                variant="solid"
                className="item-center flex"
              >
                <span className="">{t("Get Started")}</span>
                <ArrowRightIcon className="w-5 ml-2" />
              </Button>
              <Button
              href="#secondary-features"
                variant="outline"
              >
                <span className="">{t("Learn more")}</span>
              </Button>
            </div>
          </div>
          <div className="sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 relative mt-10">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 md:h-[900px] h-[500px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[512px]" priority />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
