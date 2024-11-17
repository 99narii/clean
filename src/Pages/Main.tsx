import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import BannerSlider from '../Components/Slide';
import ProcessImg from '../Assets/img/process.png';
import {Info} from '../Components/Info';
import StepperComponents from '../Components/Stepper';

const Main = () => {
    const [processVisible, setProcessVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);

    const processRef = useRef<HTMLDivElement | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);

    const checkVisibility = () => {
        const processElement = processRef.current;
        const infoElement = infoRef.current;

        if (processElement) {
            const processView = processElement.getBoundingClientRect().top < window.innerHeight && processElement.getBoundingClientRect().bottom >= 0;
            setProcessVisible(processView);
            console.log('Process View:', processView);
        }
        if (infoElement) {
            const infoView = infoElement.getBoundingClientRect().top < window.innerHeight && infoElement.getBoundingClientRect().bottom >= 0;
            setInfoVisible(infoView);
            console.log('Info View:', infoView);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            checkVisibility();
        };

        window.addEventListener('scroll', handleScroll);
        checkVisibility(); // 초기 체크
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='main'>
            <BannerSlider />
            <Info className={`info fade-in ${infoVisible ? 'visible' : ''}`} ref={infoRef} />
            <section className='process_sec'>
                <p>OUR PROCESS</p>
                <div className='process'>
                    <StepperComponents />
                </div>
            </section>
        </div>
    );
};

export default Main;
