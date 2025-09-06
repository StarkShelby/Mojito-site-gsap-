import React from 'react'
import { openingHours, socials } from '../../constants'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Footer = () => {
    useGSAP(() => {
        const splitWords = new SplitText('#contact h2', { type: 'words' })
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
                end: "bottom center",
                toggleActions: 'play none none reset',
                scrub: false,
            },
            ease: 'power1.inOut'
        })
        timeline
            .from(splitWords.words, {
                opacity: 0,
                duration: 0.8,
                yPercent: 100,
                ease: 'expo-out',
                stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0,
                duration: 0.8,
                yPercent: 100,
                ease: 'expo-out',
                stagger: 0.02
            })
            .to('#f-right-leaf', {
                yPercent: 150,
                duration: 1,
                ease: 'power1.inOut'
            })
            .to('#f-left-leaf', {
                yPercent: -100,
                duration: 1.5,
                ease: 'power1.inOut'
            }, '<')

    })
    return (
        <footer id='contact'>
            <img src="/public/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf' />
            <img src="/public/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf' />
            <div className='content'>
                <h2>Where To Find US</h2>
                <div>
                    <h3>Visit Our Location</h3>
                    <p>455, Blue Sky Lounge, Circular Road, Ranchi – 834005</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>+91 93045 67218</p>
                    <p>contact@blueskylounge.in</p>
                </div>
                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day}:{time.time}
                        </p>
                    ))}
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className='flex-center gap-5'>
                        {socials.map((social) => (
                            <a key={social.name}
                                href={social.url}
                                target='_blank'
                                rel='noreferrer '
                                aria-label={social.name}

                            >
                                <img src={social.icon} alt="socials" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer