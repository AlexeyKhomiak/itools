import React from 'react';
import s from './Header.module.css';
import Language from '../Language/Language';

const Header = () => {
    
    return (
        <div className={s.header} >

            <Language />

            <header>
                <h3> itools.ua </h3>
            </header>
            
        </div>
    );
}

export default Header;