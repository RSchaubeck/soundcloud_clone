import React from 'react';
import { Link } from "react-router-dom";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log(this.props);
    }

    autoSelectGenre() {

    }

    render() {
        return(
            <>
                <div className="edit-form-box">
                    <div id="progress-bar">
                        <span id="blue-bar"></span><span id="orange-bar"></span>
                    </div>
                    <div className="upload-options">
                        <div className="edit-song-info">
                            <div className="song-options">
                                <label>
                                    Title<span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={this.props.song.title}
                                />
                                <label>Genre</label>
                                <select name="genres" id="genres">
                                    <option value="None">None</option>
                                    <option value="Custom">Custom</option>
                                    <option value="Alternative-Rock">Alternative Rock</option>
                                    <option value="Ambient">Ambient</option>
                                    <option value="Classical">Classical</option>
                                    <option value="Country">Country</option>
                                    <option value="Dance-and-EDM">Dance & EDM</option>
                                    <option value="Dancehall">Dancehall</option>
                                </select>
                                <label>Additional Tags</label>
                                <input
                                    type="text"
                                    defaultValue={this.props.song.tags}
                                />
                                <label>Description</label>
                                <textarea
                                    defaultValue={this.props.song.description}
                                    rows="4"
                                    cols="50"
                                />
                            </div>
                        </div>
                        <div className="upload-bottom">
                            <p><span className="required">*</span>Required Fields</p>
                            <div className="upload-buttons">
                                <button>Cancel</button>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Edit;
