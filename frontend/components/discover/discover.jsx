import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar_container";

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs();
        this.props.fetchUsers();
    }

    handleClick(e) {
        this.setState({
            currentTrack: e._dispatchInstances.key
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="full-page-container">
                    <div className="discover-songs">
                        <div className="song-section">

                        </div>
                        <div className="song-section">

                        </div>
                        <div className="song-section">

                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="user-stats">
                            <p className="stats">Followers <br /><span>146</span><br /></p>
                            <p className="stats">Following <br /><span>157</span><br /></p>
                        </div>
                        <div className="go-mobile">
                            <p>Go mobile</p>
                            <p className="haejun">Thanks Haejun</p>
                            <p><a href="https://github.com/RSchaubeck" target="_blank">Github</a> ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular searches</p>
                            <p className="last-foot"><Link to="/">Language:</Link> English (US)</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Discover;