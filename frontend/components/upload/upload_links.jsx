import React from 'react';
import {Link} from 'react-router-dom';

const UploadLinks = () => {
    return (
        <div className="upload-links">
            <Link to="/upload">Upload</Link>
            <Link to="/upload">Your Tracks</Link>
            <Link to="/upload">Stats</Link>
            <Link to="/upload">Pro Plans</Link>
            <Link to="/upload">Pulse</Link>
        </div>
    )
}

export default UploadLinks;