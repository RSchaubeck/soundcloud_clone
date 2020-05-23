import React from "react";

class SongPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="song-controls">
                <audio controls src={this.props.songUrl}/>
            </div>
        )
    }
}

export default SongPlayer;