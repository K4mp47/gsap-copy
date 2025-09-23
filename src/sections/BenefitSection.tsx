import ClipPathTitle from '@/components/ClipPathTitle'
import VideoPinSection from '@/components/VideoPinSection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const BenefitSection = () => {

  useGSAP(() => {

    const benefitTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      }
    })

    benefitTl.to(".benefit-section .first-title", {
      duration: 3,
      clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
      opacity: 1,
      ease: "circ.out",
    }).to(".second-title", {
      duration: 3,
      clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
      opacity: 1,
      ease: "circ.out",
    }).to(".third-title", {
      duration: 3,
      clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
      opacity: 1,
      ease: "circ.out",
    }).to(".fourth-title", {
      duration: 3,
      clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
      opacity: 1,
      ease: "circ.out",
    })
  })

  return (
    <section className='benefit-section'>
      <div className='container mx-auto pt-20'>
        <div className='col-center'>
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefist of SPLYT
          </p>
          <div className='mt-20 col-center'>
            <ClipPathTitle title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"} />
            <ClipPathTitle title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"} />
            <ClipPathTitle title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7f3b2d"}
              className={"third-title"}
              borderColor={"#222123"} />
            <ClipPathTitle title={"Lactose free"}
              color={"#2e2d2f"}
              bg={"#fed775"}
              className={"fourth-title"}
              borderColor={"#222123"} />
          </div>
        </div>
        <p className='md:mt-0 mt-10'>
          And much more...
        </p>
      </div>
      <div className='relative overlay-box'>
        <VideoPinSection />
      </div>
    </section>
  )
}

export default BenefitSection
