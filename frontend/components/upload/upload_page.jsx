import React from "react";
import { Link } from "react-router-dom"
import NavBar from '../navbar/navbar_container';
import UploadLinks from './upload_links';
import UploadBox from './upload_container';

class UploadPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            genre: "",
            description: "",
            tags: "",
            status: "",
            songFile: null,
            songUrl: ""
        }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadSong = this.handleUploadSong.bind(this);
    this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[artist_id]', this.props.currentUser.id);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        formData.append('song[tags]', this.state.tags);
        formData.append('song[song]', this.state.songFile);
        // debugger

        if (this.state.songFile) {
            formData.append('song[song]', this.state.songFile);
            this.props.uploadSong(formData)
        }

    }

    handleUploadSong(e) {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        // debugger
        if(file) {
            reader.readAsDataURL(file);
            reader.onloadend = () =>
                this.setState({
                    title: file.name,
                    songUrl: reader.result,
                    songFile: file,
                    status: "loaded"
                });
                // debugger
        } else {
            this.setState({ songUrl: null, songFile: null });
        }
    }

    update(type) {
        return e => this.setState({ [type]: e.currentTarget.value });
    }
    

    render() {
        const uploadRender = this.state.status === "loaded" ? (
            <>
                <div className="options-upload-container">
                    <div id="progress-bar">
                        <span id="blue-bar"></span><span id="orange-bar"></span>
                    </div>
                    <div className="upload-options">
                        <div className="full-song-info">
                            <div className="song-image-container">
                                picture here
                            </div>
                            <div className="song-options">
                                <label>
                                    Title<span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={this.state.title}
                                    onChange={this.update("title")}
                                    value={this.state.title}
                                />
                                <label>Genre</label>
                                <select name="genres" id="genres" defaultValue="None">
                                    <option value="None">None</option>
                                    <option value="Custom" onChange={this.update("genre")}>Custom</option>
                                    <option value="Alternative-Rock" onChange={this.update("genre")}>Alternative Rock</option>
                                    <option value="Ambient" onChange={this.update("genre")}>Ambient</option>
                                    <option value="Classical" onChange={this.update("genre")}>Classical</option>
                                    <option value="Country" onChange={this.update("genre")}>Country</option>
                                    <option value="Dance-and-EDM" onChange={this.update("genre")}>Dance & EDM</option>
                                    <option value="Dancehall" onChange={this.update("genre")}>Dancehall</option>
                                </select>
                                <label>Additional Tags</label>
                                <input
                                    type="text"
                                    placeholder="Add tags to describe the genre and mood of your track"
                                    onChange={this.update("tags")}
                                    value={this.state.tags}
                                />
                                <label>Description</label>
                                <textarea
                                    placeholder="Describe your track"
                                    rows="4" 
                                    cols="50"
                                    onChange={this.update("description")}
                                />
                            </div>
                        </div>
                        <div className="upload-bottom">
                            <p><span className="required">*</span>Required Fields</p>
                            <div className="upload-buttons">
                                <button>Cancel</button>
                                <button onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="upload-footer">
                    <p>By uploading, you confirm that your sounds comply with our <Link to="/">Terms of Use</Link> and you don't infringe anyone else's rights.</p>
                    <span className="footer-divide"></span>
                    <p><a href="https://github.com/RSchaubeck">Github</a> ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃ Popular searches</p>
                    <p id="last-foot"><Link to="/">Language:</Link> English (US)</p>
                </div>
            </>
        ) : (
            <UploadBox handleUploadSong={this.handleUploadSong}/>
        )
        
        return(
            <>
                <NavBar />
                <div className="full-page-container">
                    <UploadLinks />
                       {uploadRender}
                </div>
            </>
        )
    }
}

export default UploadPage;
