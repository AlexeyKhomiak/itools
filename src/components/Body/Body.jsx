import React from 'react';
import s from './Body.module.css';
import StringLength from './StringLength/StringLength';
import CaseConverter from './CaseConverter/CaseConverter';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//const routes = [
//    {
//        path: "/",
//        exact: true,
//        /*sidebar: () => <Navbar />,*/
//        main: () => <StringLength />
//    },
//    {
//        path: "/StringLength",
//        /*exact: true,*/
//        sidebar: () => <div>bubblegum!</div>,
//        main: () => <StringLength />
//    },
//    {
//        path: "/CaseConverter",
//        /*sidebar: () => <div>shoelaces!</div>,*/
//        main: () => <CaseConverter />
//    }
//];

const Body = (props) => {
    
    return (
        <div>
            <div>
                <Routes>
                    <Route path='/' element={<StringLength />} />
                    <Route path='/StringLength' element={<StringLength/>} />
                    <Route path='/CaseConverter' element={<CaseConverter/>} />
                </Routes>
                {/*<Routes>*/}
                {/*    {routes.map((route, index) => (*/}
                {/*        <Route*/}
                {/*            key={index}*/}
                {/*            path={route.path}*/}
                {/*            exact={route.exact}*/}
                {/*            element={<route.main />}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</Routes>*/}
                {/*<div>*/}
                {/*    */}{/*<ul>*/}
                {/*    */}{/*    <li>*/}
                {/*    <Link to="/StringLength">StringLength</Link>*/}
                {/*    */}{/*</li>*/}
                {/*    */}{/*<li>*/}
                {/*    <br />*/}
                {/*    <Link to="/CaseConverter">CaseConverter</Link>*/}
                {/*    */}{/*    </li>*/}
                {/*    */}{/*</ul>*/}
                {/*</div>*/}
            </div>
            {/*<StringLength />*/}
            
            {/*<Route exact path='/StringLength' />*/}
            {/*<Route path='/CaseConverter' />*/}
            {/*<div className={s.content}>*/}
            {/*    */}{/*<StringLength/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Body;