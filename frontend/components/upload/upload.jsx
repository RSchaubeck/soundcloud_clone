import React from "react";
import Navbar from "../navbar/navbar_container";
import {Link} from "react-router-dom"

class Upload extends React.Component {
    constructor(props) {
        super(props)

        this.dropHandler = this.dropHandler.bind(this);
        this.dragOverHandler = this.dragOverHandler.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    dropHandler(e) {
        e.preventDefault();
        if (e.dataTransfer.items) {
            for (var i = 0; i < e.dataTransfer.items.length; i++) {
                if (e.dataTransfer.items[i].kind === 'file') {
                    var file = e.dataTransfer.items[i].getAsFile();
                    console.log('... file[' + i + '].name = ' + file.name);
                }
            }
        } else {
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
            }
        }
    }

    dragOverHandler(e) {
        e.preventDefault();
    }

    handleClick(e){
        e.preventDefault();
        const targetInput = document.getElementById('file');
        targetInput.click();
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="full-page-container">
                    <div className="upload-links">
                        <Link to="/upload">Upload</Link>
                        <Link to="/upload">Your Tracks</Link>
                        <Link to="/upload">Stats</Link>
                        <Link to="/upload">Pro Plans</Link>
                        <Link to="/upload">Pulse</Link>
                    </div>
                    <div className="upload-container">
                        <div id="drop-zone" onDrop={this.dropHandler} onDragOver={this.dragOverHandler}>
                            <div className="drop-box">
                                <p>Drag and drop your tracks & albums here</p>
                                <input className="upload-input input-submit" type="button" onClick={this.handleClick} value="or choose files to upload"/>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept={"audio/*"}
                                />
                            </div>
                            <p>Provide FLAC, WAV, ALAC, or AIFF for highest audio quality. <a href="https://help.soundcloud.com/hc/en-us/articles/115003452847-Uploading-requirements#typeOfFile" target="_blank" id="quality-link">Learn more about lossless HD.</a></p>
                        </div>
                    </div>
                    <div className="upload-footer">
                        <p><Link to="/">Supported file types and sizes</Link> ⁃ <Link to="/">Upload troubleshooting tips</Link> ⁃ <a href="https://github.com/RSchaubeck">Github</a></p>

                        <p>By uploading, you confirm that your sounds comply with our Terms of Use and you don't infringe anyone else's rights.</p>
                        <span className="footer-divide"></span>
                        <p>Legal ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular searches</p>
                        <p id="last-foot"><Link to="/">Language:</Link> English (US)</p>
                    </div>
                </div>
            </>
        )
    }

}

export default Upload;