'use client'
import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {lazy} from 'react';

const Lottie = lazy(() => import('lottie-react'))
import EyeAnimation from '@/assets/svg/eye.json';
import Fern from "@/assets/svg/fern.json"
import Leaves from "@/assets/svg/leaves.json"
import Hands from "@/assets/svg/blue-hands.json"
import FlowersAnimation from '@/assets/svg/whole-animation.json';
import CircleComponent from '@/app/components/Circle';
import InvertedCircleComponent from '@/app/components/InvertedCircle';
import gsap from 'gsap';
import Arrow from "@/assets/svg/arrow.svg"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from "next/image";
import Link from "next/link";
import Btn from "@/assets/svg/button-03.svg";
const Home = () => {
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    // Refs for GSAP animations
    const FlowersAnimationRef = useRef(null);
    const circleRef = useRef(null);
    const invertedCircleRef = useRef(null);
    const fernRef = useRef(null);
    const leavesRef = useRef(null);
    const handsRef = useRef(null);
    const eyeRef = useRef(null);
    const btnRef = useRef(null)

    const handleThanksClick = () => {
        const randomSunElements = document.getElementsByClassName('random-sun');
        for (let i = 0; i < randomSunElements.length; i++) {
            randomSunElements[i].textContent = '♥';
            //@ts-ignore
            randomSunElements[i].style.fontSize = '24px';
            //@ts-ignore
            randomSunElements[i].style.color = 'red';

        }
    };

    // Effect for GSAP animations
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(FlowersAnimationRef.current, {autoAlpha: 0, scale: 1.2, delay: 2}, {
            scale: 1,
            autoAlpha: 1,
            duration: 2,
            ease: 'expo.out'
        });

        gsap.fromTo(circleRef.current, {autoAlpha: 0, duration: 1}, {autoAlpha: 1, delay: 1.3});
        gsap.fromTo(invertedCircleRef.current, {autoAlpha: 0, duration: 1}, {autoAlpha: 1, delay: 1.5});
        gsap.fromTo(fernRef.current, {opacity: 0}, {opacity: 1, duration: 0.3, delay: 2.8});
        gsap.fromTo(leavesRef.current, {opacity: 0}, {opacity: 1, duration: 0.3, delay: 2.8});
        gsap.fromTo(handsRef.current, {opacity: 0}, {opacity: 1, duration: 0.3, delay: 2.8});
        gsap.fromTo(eyeRef.current, {opacity: 0}, {opacity: 1, duration: 0.3, delay: 2.8});
        gsap.fromTo(btnRef.current, {opacity: 0}, {opacity: 1, duration: 2, delay: 3});
        gsap.fromTo(FlowersAnimationRef.current, {opacity: 1, scale: 1, rotate: 0}, {
            opacity: 0,
            duration: 4,
            scale: 1.3,
            rotate: 2,
            delay: 2.9
        });
        setTimeout(() => {
            gsap.fromTo(fernRef.current, {scale: 1, rotate: 0, autoAlpha: 1}, {
                scale: 0.3, rotate: 70,
                scrollTrigger: {
                    trigger: fernRef.current,
                    start: 'top',
                    scrub: 3,
                    markers: false
                }
            });

            gsap.fromTo(handsRef.current, {scale: 1, rotate: 0, autoAlpha: 1}, {
                rotate: 90,
                scrollTrigger: {
                    trigger: handsRef.current,
                    start: 'top top',
                    scrub: 3,
                    markers: false
                }
            });

            gsap.fromTo(eyeRef.current, {scale: 1, autoAlpha: 1}, {
                scale: 0.7, rotation: -300,
                scrollTrigger: {
                    trigger: eyeRef.current,
                    start: 'top top',
                    scrub: 5,
                    markers: false
                }
            });
            setIsAnimationFinished(true);
        }, 2800);

    }, []);


    return (
        <div className={isAnimationFinished ? 'height' : ''}>
            <div className={'flex-width mobile'}>
                <div ref={circleRef}>
                    <CircleComponent/>
                </div>
                <div style={{zIndex: '11'}} ref={invertedCircleRef}>
                    <InvertedCircleComponent/>
                </div>
                <div>
                    <div style={{zIndex: '3'}} className={'absolute'} ref={FlowersAnimationRef}>
                        <Lottie animationData={FlowersAnimation} loop={true}/>
                    </div>
                    <>

                        <div className={'absolute'} style={{zIndex: '2'}} ref={fernRef}>
                            <Lottie animationData={Fern} loop={true}/>
                        </div>
                        <div className={'absolute'} style={{zIndex: '1'}} ref={leavesRef}>
                            <Lottie animationData={Leaves} loop={true}/>
                        </div>
                        <div className={'absolute'} style={{zIndex: '3'}} ref={handsRef}>
                            <Lottie animationData={Hands} loop={true}/>
                        </div>
                        <div className={'absolute'} style={{zIndex: '1'}} ref={eyeRef}>
                            <Lottie animationData={EyeAnimation} loop={false}/>
                        </div>
                    </>
                </div>
                <div className='flex justify-around pt-32 h-full items-center gap-8  flex-col'>
                    <div ref={btnRef} className='flex gap-2'>
                        <p className='opacity-60 text-white'>Scroll</p>
                        <div className='flex opacity-60'>
                            <Image width={'15'} height={'20'} src={Arrow} alt={'arrow'}/>
                            <Image style={{transform: 'rotate(180deg)'}} width={'15'} height={'20'} src={Arrow}
                                   alt={'arrow'}/>
                        </div>
                    </div>
                    <div className='flex justify-center items-end gap-8 h-full '>
                        <button className="btn"><Link href="https://www.linkedin.com/in/maxime-palmino-167930100/"
                                                      target="_blank">LinkedIn</Link></button>
                        <button className="btn" onClick={handleThanksClick}><a>
                                                       <Image width={'25'} height={'35'} alt={'hello'} src={Btn.src}/>️
                            Thanks for visiting                             <Image width={'25'} height={'35'} alt={'hello'} src={Btn.src}/>️

                        </a></button>
                        <button className="btn"><Link href="https://github.com/MaximePalmino/shiningsoul"
                                                      target="_blank">GitHub</Link></button>
                    </div>
                    <p className='opacity-60 font-light text-xs'>Music: Resonance x Genesis x Not Allowed (Slowed)</p>
                </div>
            </div>
        </div>
    );
};

// Exporting the Home component
export default Home;
