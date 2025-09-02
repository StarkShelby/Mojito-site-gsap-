import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom-top'
            }
        })
        navTween.fromTo('nav',
            {//From 
                backgroundColor: 'transparent'
            }, {//To
            backgroundColor: '00000050',
            backgroundfiler: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        }, [])
    })
    return (
        <nav>
            <div>
                <a href="home flex" className='flex items-center gap-2 '>
                    <img src="/public/images/logo.png" alt="logo" />
                    <p>Velora Mist</p>
                </a>
                <ul>
                    {navLinks.map((links) => (
                        <li key={links.id}>
                            <a href={`#${links.id}`}>{links.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar