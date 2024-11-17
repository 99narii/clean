import React, { forwardRef } from 'react';
import './style.scss'; 
import { AnimationProps } from '../../Types/types';

const content = [
    { title: '헌 집을 새 집 처럼', description: '다음 세입자를 위한 집주인의 배려' },
    { title: '내 집 지킴이', description: '다음 세입자를 위한 전 세입자의 배려' },
    { title: '집을 위한 투자', description: '정기청소로 깨끗한 위생 유지' },
];

export const Info = forwardRef<HTMLDivElement, AnimationProps>(({ className }, ref) => {
    return (
        <div ref={ref} className={`info ${className}`}>
            {content.map((item, index) => (
                <div
                    key={index}
                    className="card"
                    style={{ animationDelay: `${index * 1}s` }}
                >
                    <b>{item.title}</b>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
});
