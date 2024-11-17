import React, { useState } from 'react';
import './style.scss';

type QuestionOption = {
    label: string;
    price: number;
};

type Question = {
    question: string;
    info: string,
    options: QuestionOption[];
};

type Questions = {
    [key: string]: Question[];
};

const questions: Questions = {
    initial: [
        {
            question: '원하시는 서비스를 선택해주세요.',
            info: '',
            options: [
                { label: '원룸', price: 10 }, 
                { label: '1.5룸', price: 13 }, 
                { label: '주방', price: 7 }, 
                { label: '화장실', price: 7 }
            ],
        },
    ],
    size: [
        {
            question: '실 평수를 선택해주세요.',
            info: '',
            options: [
                { label: '5평 미만', price: 4 }, 
                { label: '7평 미만', price: 5 }, 
                { label: '9평 미만', price: 7 }, 
                { label: '12평 이하', price: 10 }, 
                { label: '12평 이상', price: 10 }
            ],
        },
    ],
    bathroom: [
        {
            question: '화장실의 갯수는 몇 개인가요?',
            info: '',
            options: [
                { label: '1개', price: 0 }, 
                { label: '2개', price: 7 }, 
                { label: '3개 이상', price: 14 }, 
            ],
        },
    ],
    more: [
        {
            question: '추가 서비스가 필요하신가요?',
            info: '세탁기, 냉장고, 에어컨 기본 청소 추가가 가능합니다.',
            options: [
                { label: '세탁기', price: 2 }, 
                { label: '냉장고', price: 3 }, 
                { label: '에어컨', price: 2 }, 
                { label: '세탁기 + 냉장고', price: 5 }, 
                { label: '세탁기 + 에어컨', price: 4 }, 
                { label: '냉장고 + 에어컨', price: 4 }, 
                { label: '세탁기 + 냉장고 + 에어컨', price: 7 }, 
            ],
        },
    ],
    add: [
        {
            question: '발코니 혹은 다용도실이 있나요?',
            info: '',
            options: [
                { label: '없음', price: 0 }, 
                { label: '발코니 있음', price: 3 }, 
                { label: '다용도실 있음', price: 3 }, 
                { label: '둘 다 있음', price: 5 }, 
            ],
        },
    ],
    result: [ // 결과 단계 추가
        {
            question: '견적 결과',
            info: '',
            options: [
                { label: '견적을 확인하셨습니다.', price: 0 }
            ],
        },
    ],
};

export const Estimate: React.FC = () => {
    const [totalEstimate, setTotalEstimate] = useState<number>(0); 
    const [responses, setResponses] = useState<QuestionOption[]>([]);
    const [currentStage, setCurrentStage] = useState<'initial' | 'size' | 'bathroom' | 'more' | 'add' | 'result'>('initial');

    const handleOptionSelect = (option: QuestionOption) => {
        const newResponses = [...responses, option];
        setResponses(newResponses);

        if (currentStage === 'initial') {
            if (option.label === '주방') {
                setCurrentStage('more');
            } else if (option.label === '화장실') {
                setCurrentStage('bathroom');
            } else {
                setCurrentStage('size');
            }
        } else if (currentStage === 'size') {
            setCurrentStage('add');
        } else if (currentStage === 'bathroom') {
            setCurrentStage('more');
        } else if (currentStage === 'add') {
            setCurrentStage('more');
        } else if (currentStage === 'more') {
            calculateEstimate(newResponses);
            setCurrentStage('result');
        } 
    };

    const calculateEstimate = (responses: QuestionOption[]) => {
        const estimate = responses.reduce((total, response) => total + response.price, 0);
        setTotalEstimate(estimate);
    };

    const handleRestart = () => {
        setResponses([]);
        setCurrentStage('initial');
        setTotalEstimate(0);
    };

    const handleCall = () => {
        const phoneNumber = '+821024881056'; // 실제 전화번호로 변경
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleSms = () => {
        const phoneNumber = '+821024881056'; // 실제 전화번호로 변경
        const message = '안녕하세요, 견적 문의드립니다.'; // 전송할 메시지
        window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    };

    const currentQuestions = questions[currentStage]; // 현재 단계에 맞는 질문 가져오기

    return (
        <div className='estimate'>
            <div className='tit'>
                <span className='main_tit'>
                    <p>고객님!</p>
                    <p>간편하게 직접 견적을 확인해보세요.</p>
                </span>
                <p className='body_tit'>뽀송은 고객님의 소중한 개인 정보를 수집하지 않습니다.<br/>
                    고객님께서 충분히 비교해 보시고 연락주세요.
                </p>
            </div>
            <div className='box'>
                {currentStage !== 'result' ? (
                    <div>
                        <div className='quast_box'>
                            <h2>{currentQuestions[0].question}</h2>
                        </div>
                        <div className='quast_info'>{currentQuestions[0].info}</div>
                        <div className='answer_box'>
                            {currentQuestions[0].options.map((option: QuestionOption, index: number) => (
                                <button key={index} onClick={() => handleOptionSelect(option)}>
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='result'>
                        <p className='total'>견적은 <b>{totalEstimate}만원</b>입니다.</p>
                        <button className='restart_btn' onClick={handleRestart}>다시하기</button>
                        <div className='btn_set'>
                            <button className='call_btn' onClick={handleCall}>전화 문의</button>
                            <button className='sms_btn' onClick={handleSms}>문자 문의</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
