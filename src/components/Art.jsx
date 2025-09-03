import gsap from 'gsap'
import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'


const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top'
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true

            }
        })
        maskTimeline
            .to('.will-fade', {
                opacity: 0, stagger: 0.2, ease: 'power1.inOut'
            })
            .to('.masked-img', { scale: 1.3, ease: 'power1.inOut', maskSize: '400%', maskPosition: 'center' })
            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
    })
    return (
        <div id='art'>
            <div className='container md:pt-10 mx-auto h-full'>
                <h2 className='will-fade'>The Art</h2>
                <div className='content'>
                    <ul className='space-y-8 md:py-20 will-fade'>
                        {goodLists.map((features, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <img src="/public/images/check.png" alt="check.png" />
                                <p>{features}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='cocktail-img'>
                        <img
                            src="/public/images/under-img.jpg"
                            alt="cocktail"
                            className='abs-center masked-img size-full object-contain' />
                    </div>
                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((features, index) => (
                            <li key={index} className='flex justify-start items-center gap-2'>
                                <img src="/public/images/check.png" alt="check.png" />
                                <p className='md:w-fit w-60'>{features}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='masked-container'>
                    <h2 className='will-fade'>Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3 className='md:text-4xl text-3xl'>Made with Craft,Poured with Cocktails </h3>
                        <p>Not just a drink, It's a carefully crafted moment just for you.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Art