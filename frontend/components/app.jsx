import GreetingContainer from "./greeting/greeting_container";
import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import Splash from './splash/splash_container';
import Navbar from './navbar/navbar_container';

const App = () => (
    <div>
        <Modal />
        <Splash />
        {/* <Navbar /> */}
    </div>
);

export default App; 