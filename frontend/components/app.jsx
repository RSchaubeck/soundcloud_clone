import GreetingContainer from "./greeting/greeting_container";
import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>JaeCloud</h1>
            </Link>
            <GreetingContainer />
        </header>
    </div>
);

export default App; 