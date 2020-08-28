import React from 'react';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: this.props.song
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(type, e) {
        const song = this.state.song;
        song[type] = e.currentTarget.value;
        return this.setState({ song: song });
    }

    handleSave(e) {
        e.preventDefault();
        this.props.updateSong(this.state.song);
        this.props.closeModal();
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
                                    onChange={(e) => this.handleChange("title", e)}
                                />
                                <label>Genre</label>
                                <select name="genres" id="genres">
                                    <option value="None" onChange={(e) => this.handleChange("genre", e)}>None</option>
                                    <option value="Custom" onChange={(e) => this.handleChange("genre", e)}>Custom</option>
                                    <option value="Alternative-Rock" onChange={(e) => this.handleChange("genre", e)}>Alternative Rock</option>
                                    <option value="Ambient" onChange={(e) => this.handleChange("genre", e)}>Ambient</option>
                                    <option value="Classical" onChange={(e) => this.handleChange("genre", e)}>Classical</option>
                                    <option value="Country" onChange={(e) => this.handleChange("genre", e)}>Country</option>
                                    <option value="Dance-and-EDM" onChange={(e) => this.handleChange("genre", e)}>Dance & EDM</option>
                                    <option value="Dancehall" onChange={(e) => this.handleChange("genre", e)}>Dancehall</option>
                                </select>
                                <label>Additional Tags</label>
                                <input
                                    type="text"
                                    defaultValue={this.props.song.tags}
                                    onChange={(e) => this.handleChange("tags", e)}
                                />
                                <label>Description</label>
                                <textarea
                                    defaultValue={this.props.song.description}
                                    rows="4"
                                    cols="50"
                                    onChange={(e) => this.handleChange("description", e)}
                                />
                            </div>
                        </div>
                        <div className="upload-bottom">
                            <p><span className="required">*</span>Required Fields</p>
                            <div className="upload-buttons">
                                <button>Cancel</button>
                                <button onClick={this.handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Edit;
