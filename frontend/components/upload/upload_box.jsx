import React from "react";

class UploadBox extends React.Component {
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
                                onChange={this.props.handleUploadSong}
                            />
                        </div>
                        <p>Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.</p>
                    </div>
                </div>
                <div className="upload-footer">
                    <p><a href="https://github.com/RSchaubeck">Github</a> - <a href="https://github.com/RSchaubeck">LinkedIn</a> - <a href="https://github.com/RSchaubeck">Angel List</a></p>

                    <p>By uploading, you confirm that your sounds don't infringe anyone else's rights.</p>
                    <span className="footer-divide"></span>
                </div>
            </>
        )
    }

}

export default UploadBox;