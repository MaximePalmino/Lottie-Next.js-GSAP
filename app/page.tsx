'use client'
import React, {useLayoutEffect, useState} from 'react';
import Main from "@/app/components/Main";
import Sound from "@/public/Reson2.mp3"
import gsap from 'gsap';

const Home = () => {

    const [isAnswered, setIsAnswered] = useState<boolean>(false)
    const [isAllowingMusic, setIsAllowingMusic] = useState<boolean>(false)

    const handleAcceptMusic = () => {
        setIsAnswered(true)
        setIsAllowingMusic(true)
    }
    const handleRefuseMusic = () => {
        setIsAnswered(true)
        setIsAllowingMusic(false)
    }
    const handleButtonClick = () => {
        const hElements = document.getElementsByClassName('random-sun');
        while (hElements.length > 0) {
            // @ts-ignore
            hElements[0].parentNode.removeChild(hElements[0]);
        }
        // Generate and add new "H" elements with GSAP animation for opacity
        for (let i = 0; i < 30; i++) {
            const hElement = document.createElement('div');
            hElement.className = 'random-sun';
            hElement.textContent = '☀️';
            hElement.style.zIndex = '-1';
            hElement.style.position = 'fixed';
            hElement.style.left = `${Math.random() * window.innerWidth}px`;
            hElement.style.top = `${Math.random() * window.innerHeight}px`;

            // Set a slower animation duration for each "H" element
            const animationDuration = 5 + Math.random() * 10; // Adjust the range as needed
            const animationDirection = Math.random() > 0.5 ? 1 : -1; // 1 for clockwise, -1 for counterclockwise

            // Set a smaller font size for each "H" element
            const fontSize = 1 + Math.random() * 5; // Adjust the range as needed
            hElement.style.fontSize = `${fontSize}px`;

            // Set initial opacity to 0
            hElement.style.opacity = '0';

            // Use GSAP to animate opacity from 0 to 1
            gsap.to(hElement, {
                opacity: 1,
                duration: .5, // Adjust the duration as needed
                delay: Math.random(), // Introduce a delay for a staggered effect
            });
            hElement.style.animation = `moveRandomly ${animationDuration}s infinite linear ${
                animationDirection > 0 ? 'normal' : 'reverse'
            }`;
            document.body.appendChild(hElement);
        }
    };
    useLayoutEffect(() => {
        handleButtonClick()
    }, []);

    return (
        (!isAnswered ? <div className={'flex justify-center items-center h-full w-full pb-5 fixed gap-4 '}>
                    <div className='flex justify-around pt-32 h-full items-center gap-8  flex-col mobile'>
                        <div className='flex flex-col justify-center items-center  gap-8 h-full '>
                            <p className='opacity-75 text-white'>Enable background music ? (recommended)</p>
                            <div className='flex gap-4 '>
                                <button className="btn" onClick={handleAcceptMusic}><a href="#">Yes</a>
                                </button>
                                <button className="btn" onClick={handleRefuseMusic}><a href="#">No</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h1 className='opacity-75 mobile-display text-white'>Please watch on a bigger screen. 🙏</h1>
                </div> :
                <div className='mobile'>
                    {isAllowingMusic && (
                        <audio id="audio" loop autoPlay>
                            <source src={Sound} type="audio/mpeg"/>
                        </audio>
                    )}
                    <Main/>
                </div>
        )
    );
};

// Exporting the Home component
export default Home;
