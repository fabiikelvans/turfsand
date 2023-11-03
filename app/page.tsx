import Image from 'next/image'
import Hero from "@/app/components/sections/hero";
import AboutUs from "@/app/components/sections/about-us";
import Experience from "@/app/components/sections/experience";
import Values from "@/app/components/sections/values";
import Services from "@/app/components/sections/services";
import Work from "@/app/components/sections/work";
import CTA from "@/app/components/sections/cta";
import Testimonials from "@/app/components/sections/testimonials";
import Partners from "@/app/components/sections/partners";
import Ready from "@/app/components/sections/ready";

export default function Home() {
  return (
    <main className=" ">
        <Hero/>
        <AboutUs/>
        <Experience/>
        <Values/>
        <Services/>
        <Work/>
        <CTA/>
        <Testimonials/>
        <Partners/>
        <Ready/>
    </main>
  )
}
