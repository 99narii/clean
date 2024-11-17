import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash'; // lodash를 사용하여 debounce 기능 추가
import './style.scss';
import BannerSlider from '../Components/Slide';
import { Info } from '../Components/Info';
import StepperComponents from '../Components/Stepper';

const Main = () => {
    const [processVisible, setProcessVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const processRef = useRef<HTMLDivElement | null>(null);
    const infoRef = useRef<HTMLDivElement | null>(null);
    const serviceAreaRef = useRef<HTMLDivElement | null>(null);

    const checkVisibility = () => {
        const processElement = processRef.current;
        const infoElement = infoRef.current;
        const serviceAreaElement = serviceAreaRef.current;

        if (processElement) {
            const processView = processElement.getBoundingClientRect().top < window.innerHeight && processElement.getBoundingClientRect().bottom >= 0;
            setProcessVisible(processView);
        }
        if (infoElement) {
            const infoView = infoElement.getBoundingClientRect().top < window.innerHeight && infoElement.getBoundingClientRect().bottom >= 0;
            setInfoVisible(infoView);
        }
        if (serviceAreaElement) {
            const serviceAreaView = serviceAreaElement.getBoundingClientRect().top < window.innerHeight && serviceAreaElement.getBoundingClientRect().bottom >= 0;
            setIsVisible(serviceAreaView);
        }
    };

    useEffect(() => {
        const handleScroll = debounce(() => {
            checkVisibility();
        }, 100); // 100ms 지연

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
            <section>
                <div className='service_area' ref={serviceAreaRef}>
                    <p className={`fade-in ${isVisible ? 'visible' : ''}`}>뽀송 서비스 가능 지역</p>
                    <b className={`fade-in ${isVisible ? 'visible' : ''}`}>서울 전 지역</b>
                    <span className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        <b>경기 서북부</b>(고양, 파주, 인천, 부천)
                    </span>
                </div>
            </section>
            <section className='process_sec'>
                <p>OUR PROCESS</p>
                <div className='process' ref={processRef}>
                    <StepperComponents />
                </div>
            </section>
        </div>
    );
};

export default Main;
