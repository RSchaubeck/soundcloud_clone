import GreetingContainer from "./greeting/greeting_container";
import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import Navbar from './navbar/navbar_container';

const App = () => (
    <div>
        <Modal />
        <Navbar />
    </div>
);

export default App; 