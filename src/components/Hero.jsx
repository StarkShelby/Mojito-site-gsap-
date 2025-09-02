import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' })
        const paraSplit = new SplitText('.subtitle', { type: 'lines' })

        // now making the animation
        heroSplit.chars.forEach((chars) => chars.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paraSplit.lines, {
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            delay: 1,
            opacity: 0,
            ease: 'expo.out'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: -200 }, 0)
            .to('.left-leaf', { y: 200 }, 0)

    }, [])
    return (
        <>
            <section id="hero" className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img src="/public/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="/public/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>Elegant, Effervescent, Exquisite</p>
                            <p className='subtitle'>Sip the Spirit <br /> of Summer </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>Cool mint leaves, zesty lime, and a sparkle of soda — the Mojito is pure refreshment in a glass. Every sip feels like a summer breeze, light, crisp, and endlessly uplifting.</p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Hero