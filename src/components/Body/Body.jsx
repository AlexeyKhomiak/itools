import React from 'react';
import s from './Body.module.css';
import StringLength from './StringLength/StringLength';
import CaseConverter from './CaseConverter/CaseConverter';
import { Routes, Route } from 'react-router-dom';

const Body = () => {    
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<StringLength />} />
                <Route path='/StringLength' element={<StringLength/>} />
                <Route path='/CaseConverter' element={<CaseConverter/>} />
            </Routes>
        </div>
    );
}

export default Body;