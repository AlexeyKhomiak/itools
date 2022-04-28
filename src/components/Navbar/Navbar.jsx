import React from 'react';
import s from './Navbar.module.css';
/*import { useTranslation } from 'react-i18next';*/
import StringLength from '../Body/StringLength/StringLength';
import CaseConverter from '../Body/CaseConverter/CaseConverter';
import Body from '../Body/Body';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const routes = [
    {
        path: "/",
        exact: true,
        /*sidebar: () => <Navbar />,*/
        main: () => <StringLength />
    },
    {
        path: "/StringLength",
        /*exact: true,*/
        sidebar: () => <div>bubblegum!</div>,
        main: () => <StringLength />
    },
    {
        path: "/CaseConverter",
        /*sidebar: () => <div>shoelaces!</div>,*/
        main: () => <CaseConverter />
    }
];

const Navbar = () => {
    /*const { t } = useTranslation();*/
    return (
        
        <nav className={s.nav}>
            {/*<div className={s.item}>*/}
            {/*    <Link to="/StringLength">{t('Navbar.StringLength')}</Link>*/}
            {/*    */}{/*<a href="/StringLength"></a>*/}
            {/*    <br/>*/}
            {/*    */}{/*<a href="/CaseConverter">{t('Navbar.CaseConverter')}</a>*/}
            {/*</div>*/}
            <div>
                <a href='/StringLength'>StringLength</a>
                <br />
                <a href='/CaseConverter'>CaseConverter</a>
                <br />
                <br />
                    <div>
                        {/*<ul>*/}
                        {/*    <li>*/}
                                <Link to="/StringLength">StringLength</Link>
                            {/*</li>*/}
                        {/*<li>*/}
                                <br/>
                                <Link to="/CaseConverter">CaseConverter</Link>
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>


                    {/*<Routes>*/}
                        {/*{routes.map((route, index) => (*/}
                        {/*    <Route*/}
                        {/*        key={index}*/}
                        {/*        path={route.path}*/}
                        {/*        exact={route.exact}*/}
                        {/*        element={<route.main />}*/}
                        {/*    />*/}
                        {/*))}*/}
                    {/*</Routes>*/}
                    
                </div>
        </nav>

    );
}

export default Navbar;