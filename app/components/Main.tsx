'use client'
import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {lazy} from 'react';
import loadable from '@loadable/component'

const Lottie = lazy(() => import('lottie-react'))
import EyeAnimation from '@/assets/svg/Oeil.json';
import Fougeres from "@/assets/svg/Fougeres.json"
import Leaves from "@/assets/svg/Leaves.json"
import Hands from "@/assets/svg/blue-hands.json"
import FlowersAnimation from '@/assets/svg/Flor.json';
import CircleComponent from '@/app/components/Circle';
import InvertedCircleComponent from '@/app/components/InvertedCircle';
import gsap from 'gsap';
import Arrow from "@/assets/svg/Arrow.svg"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from "next/image";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({limitCallbacks: true});
// Home component definition
const Home = () => {
    // State variables
    const [showCircle, setShowCircle] = useState(false);
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    // Refs for GSAP animations
    const firstAnimationRef = useRef(null);
    const circleRef = useRef(null);
    const invertedCircleRef = useRef(null);
    const fougereRef = useRef(null);
    const leavesRef = useRef(null);
    const handsRef = useRef(null);
    const eyeRef = useRef(null);
    const btnRef = useRef(null)


    // Effect for GSAP animations
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(firstAnimationRef.current, {autoAlpha: 0, scale: 1.2, delay: 2}, {
            scale: 1,
            autoAlpha: 1,
            duration: 3,
            ease: 'expo.out'
        });

        gsap.fromTo(circleRef.current, {autoAlpha: 0, duration: 1}, {autoAlpha: 1, delay: 1.3});
        gsap.fromTo(invertedCircleRef.current, {autoAlpha: 0, duration: 1}, {autoAlpha: 1, delay: 1.5});

        gsap.fromTo(fougereRef.current, {opacity: 0}, {opacity: 1, duration: 3, delay: 2.8});
        gsap.fromTo(leavesRef.current, {opacity: 0}, {opacity: 1, duration: 3, delay: 2.8});
        gsap.fromTo(handsRef.current, {opacity: 0}, {opacity: 1, duration: 3, delay: 2.8});
        gsap.fromTo(eyeRef.current, {opacity: 0}, {opacity: 1, duration: 3, delay: 2.8});
        gsap.fromTo(btnRef.current, {opacity: 0}, {opacity: 1, duration: 2, delay: 3});

        setTimeout(() => {
            setShowCircle(true);
        }, 2900);

        setTimeout(() => {
            gsap.fromTo(firstAnimationRef.current, {opacity: 1, scale: 1, rotate: 0}, {
                opacity: 0,
                duration: 2,
                scale: 1.1,
                rotate: 5
            });

            let ctx = gsap.fromTo(fougereRef.current, {scale: 1, rotate: 0, autoAlpha: 1}, {
                scale: 0.3, rotate: 70,
                scrollTrigger: {
                    trigger: fougereRef.current,
                    start: 'top',
                    scrub: 3,
                    markers: true
                }
            });

            gsap.fromTo(handsRef.current, {scale: 1, rotate: 0, autoAlpha: 1}, {
                rotate: 90,
                scrollTrigger: {
                    trigger: handsRef.current,
                    start: 'top top',
                    scrub: 3,
                    markers: true
                }
            });

            gsap.fromTo(eyeRef.current, {scale: 1, autoAlpha: 1}, {
                scale: 0.7, rotation: -300,
                scrollTrigger: {
                    trigger: eyeRef.current,
                    start: 'top top',
                    scrub: 5,
                    markers: true
                }
            });
            console.log(ctx, fougereRef, eyeRef)

            setIsAnimationFinished(true);
            return () => ctx.revert(); // cleanup!

        }, 2900);

    }, []);

    return (
        <div className={isAnimationFinished ? 'h' : ''}>
            <div className={'flexW maxH'}>
                <div style={{zIndex: '9999'}} ref={circleRef}>
                    <CircleComponent/>
                </div>
                <div style={{zIndex: '11'}} ref={invertedCircleRef}>
                    <InvertedCircleComponent/>
                </div>
                <div className={'child'}>
                    <div style={{zIndex: '3'}} className={'absolute'} ref={firstAnimationRef}>
                        <Lottie animationData={FlowersAnimation} loop={true}/>
                    </div>
                    {showCircle && (
                        <>
                            <div className={'absolute'} style={{zIndex: '2'}} ref={fougereRef}>
                                <Lottie animationData={Fougeres} loop={true}/>
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
                    )}
                </div>
                <div className='flex justify-around pt-32 h-full items-center gap-8  flex-col'>
                    <div ref={btnRef} className='flex gap-2'>
                        <p className='opacity-60'>Scroll</p>
                        <div className='flex opacity-60'>
                            <Image width={'15'} height={'20'} src={Arrow} alt={'arrow'}/>
                            <Image style={{transform: 'rotate(180deg)'}} width={'15'} height={'20'} src={Arrow}
                                   alt={'arrow'}/>
                        </div>


                    </div>

                    <div className='flex justify-center items-end  gap-8 h-full '>
                        <button className="btn"><a href="#">Github</a></button>
                        <button className="btn"><a href="#">LinkedIn</a></button>
                        <button className="btn"><a href="#">Markers</a></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Exporting the Home component
export default Home;
