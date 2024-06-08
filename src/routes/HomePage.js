import React from 'react';
import SharedPage from './SharedPage';
import home from "../assets/Library-cuate.svg"

export default function HomePage(sidebarVisible, setSidebarVisible) {
    return (
        <SharedPage sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}>
            <img className='m-auto h-full w-full' src={home}/>
        </SharedPage>
    );
}