import React from 'react'
import { CallToAction } from '@/components/CallToAction.jsx'
import { Faqs } from '@/components/Faqs.jsx'
import {Hero} from "@/components/Hero.jsx"
import { Pricing } from '@/components/Pricing.jsx'
import { PrimaryFeatures } from '@/components/PrimaryFeatures.jsx'
import { SecondaryFeatures } from '@/components/SecondaryFeatures.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Pricing />
      <Faqs />
    </>
  )
}
