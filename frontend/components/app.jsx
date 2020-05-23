import React from 'react';
import Modal from './modal/modal';
import Splash from './splash/splash_container';
import Discover from './discover/discover_container';
import Upload from './upload/upload_page_container';
import Profile from './profile/profile-container';
import SongPlayer from './song_player/song_player';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div id="main-container">
        <Modal />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/discover" component={Discover} />
        <ProtectedRoute exact path="/upload" component={Upload} />
        <ProtectedRoute exact path="/users/:userId" component={Profile} />
        {/* <SongPlayer /> */}
    </div>
);

export default App; 