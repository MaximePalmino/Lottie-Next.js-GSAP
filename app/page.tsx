'use client'
import React, {useLayoutEffect, useState} from 'react';
import Main from "@/app/components/Main";
import Sound from "@/public/Reson1.mp3"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ limitCallbacks: true });

// Home component definition
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


    return (
        (!isAnswered ? <div className={'flexW maxH'}>
                    <div className='flex justify-around pt-32 h-full items-center gap-8  flex-col'>
                        <div className='flex  flex-col justify-center items-center  gap-8 h-full '>
                            <p className='opacity-75'>Do you allow music ?</p>
                            <div className='flex gap-4 '>
                                <button className="btn" onClick={handleAcceptMusic}><a href="#">Yes</a>
                                </button>
                                <button className="btn" onClick={handleRefuseMusic}><a href="#">No</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> :
                <div>
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
