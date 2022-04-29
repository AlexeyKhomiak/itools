import React from 'react';
import s from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/StringLength'> {t('Navbar.StringLength')} </NavLink>
                <br />
                <NavLink to='/CaseConverter'> {t('Navbar.CaseConverter')} </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;