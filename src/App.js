import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';


function Page() {
    return (

        <div className="App">
                            
            <Header />

            <Navbar />

            <Body />

        </div>

    );
}

// loading component for suspense fallback
const Loader = () => (
    <div className="App">
        <div>loading...</div>
    </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Page />
        </Suspense>
    );
}
