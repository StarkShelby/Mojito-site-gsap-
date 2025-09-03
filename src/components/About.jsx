import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

const About = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', { type: 'words' })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
                toggleActions: 'play none none reset',
                scrub: false,
            }
        })
        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                duration: 0.8,
                yPercent: 100,
                ease: 'expo-out',
                stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duration: 0.9,
                ease: 'power1.inOut',
                stagger: 0.04
            }, '-=0.5')
    }, [])
    return (
        <div id='about' >
            <div className='md:px-0 px-5 mb-16'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'>Best Cocktails</p>
                        <h2>Where every details matters
                            <span className='text-white'>-</span>from muddle to garnish
                        </h2>
                    </div>
                    <div className='sub-content'>
                        <p>
                            Every cocktail we serve is a blend of art and flavor,
                            Mixed with precision, crafted to savor.
                            From timeless classics to bold new twists,
                            Each sip is an experience you can&apos;t resist.
                        </p>
                        <div>
                            <p className='md:text-3xl text-2xl font-bold'>
                                <span>
                                    4.5
                                </span>/5
                            </p>
                            <p className='text-sm text-white-100'>
                                More than 1000+ customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='top-grid'>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/public/images/abt1.png" alt="img1" />
                </div>
                <div className='md:col-span-6'>
                    <div className='noisy' />
                    <img src="/public/images/abt2.png" alt="img2" />
                </div>

                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/public/images/abt5.png" alt="img5" />
                </div>
            </div>
            <div className='bottom-grid'>
                <div className='md:col-span-8'>
                    <div className='noisy' />
                    <img src="/public/images/abt3.png" alt="img3" />
                </div>
                <div className='md:col-span-4'>
                    <div className='noisy' />
                    <img src="/public/images/abt4.png" alt="img4" />
                </div>
            </div>
        </div>
    )
}

export default About