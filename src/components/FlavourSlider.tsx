"use client"
import React, { useRef } from 'react'
import { flavorlists } from '@/constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const FlavourSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  })

  useGSAP(() => {
    const scrollAmount = sliderRef.current!.scrollWidth - window.innerWidth

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: `+=${scrollAmount + (isTablet ? 1000 : 1400)}px`, // Multiply by 2 for smoother scroll
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      })

      tl.to(".flavor-section", {
        x: `-${scrollAmount + (isTablet ? 1000 : 1400)}px`,
        ease: "none",
      })
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      }
    })

    titleTl.to(".first-text-split", {
      xPercent: -30,
      ease: "power1.inOut",
    }).to(".flavor-text-scroll", {
      xPercent: -22,
    }, "<").to(".second-text-split", {
      xPercent: -10,
      ease: "power1.inOut",
    }, "<")
  }, [])

  return (
    <div className='slider-wrapper' ref={sliderRef}>
      <div className='flavors'>
        {
          flavorlists.map((flavor) => {
            return (
              <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation} cursor-pointer hover:scale-110 hover:rotate-0 transition-all duration-300`}>
                <img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} className='absolute bottom-0' />
                <img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} className='drinks' />
                <img src={`/images/${flavor.color}-elements.webp`} alt={flavor.name} className='elements' />
                <h1>{flavor.name}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FlavourSlider
