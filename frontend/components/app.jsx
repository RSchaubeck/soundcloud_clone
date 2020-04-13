import GreetingContainer from "./greeting/greeting_container";
import React from 'react';
import Modal from './modal/modal';
import Splash from './splash/splash_container';
import Discover from './discover/discover_container';
import Upload from "./upload/upload_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/discover" component={Discover} />
        <ProtectedRoute exact path="/upload" component={Upload} />
    </div>
);

export default App; 