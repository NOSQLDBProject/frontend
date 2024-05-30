import React from 'react';
import SharedPage from './SharedPage';

export default function HomePage(sidebarVisible, setSidebarVisible) {
    return (
        <SharedPage sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}>
            <img className='m-auto h-full w-full' src='https://th.bing.com/th/id/R.ff4cc7d14830105b0662eb537568c5a8?rik=s2ewEQ4Em%2f%2fwKg&riu=http%3a%2f%2fmedia.gqindia.com%2fwp-content%2fuploads%2f2016%2f04%2fTrinity-College-Library.jpg&ehk=wIeMCAA8PIdMCJ57J1J36jbZO%2fIYkIxSSt2Hopk5Ycc%3d&risl=&pid=ImgRaw&r=0'/>
        </SharedPage>
    );
}