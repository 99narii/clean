import React from 'react';
import './style.scss'; 
import Logo from '../../Assets/img/logo.png'
import { HeaderProps } from '../../Types/types';

const Header = ({ scrollToMain, scrollToEstimate }: HeaderProps) => {
    return (
        <header className="header">
            <div>
            <button onClick={scrollToMain}><img className='logo' src={Logo}/></button>
            <nav>
                <button onClick={scrollToMain}>뽀송클린</button>
                <button onClick={scrollToEstimate}>견적</button>
            </nav>
            </div>
        </header>
    );
};

export default Header;
