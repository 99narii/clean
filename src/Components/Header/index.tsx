import React from 'react';
import './style.scss'; 
import Logo from '../../Assets/img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div>
            <a href='/'><img className='logo' src={Logo}/></a>
            <nav>
                <a href="/">뽀송클린</a>
                <a href="/estimate">견적</a>
            </nav>
            </div>
        </header>
    );
};

export default Header;
