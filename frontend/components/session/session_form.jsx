import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(type) {
        return e => this.setState({ [type]: e.target.value })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const emailField = this.props.signedUp ? null : 
            <>
                <label>Username:<input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                </label><br />
            </>;

        return (
            <div className="session-form-container">
                <span onClick={this.props.closeModal} className="close-session-form">
                    X
                </span>
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    {this.renderErrors()}
                    <div className="session-form">
                        {emailField}
                        <label>Username:
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br />
                        <label>Password:
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}           
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);