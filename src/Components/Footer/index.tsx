import React from 'react';
import './style.scss'; 
import Logo from '../../Assets/img/logo.png'
import { HeaderProps } from '../../Types/types';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer_contents'>
                <div>
                    <b>뽀송</b>
                    <span>대표 : 유성래</span>
                </div>
                <div>
                    {/* <span>사업자등록번호 : </span> */}
                    <span>전화 : +8210-2488-1056</span>
                </div>
            </div>
        </footer>
    );
};

