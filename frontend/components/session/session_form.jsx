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
        this.update = this.update.bind(this);
        this.loginDemoAcc = this.loginDemoAcc.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    loginDemoAcc(e) {
        e.preventDefault();
        const user = Object.assign({}, { username: "DemoAcc", password: "password" });
        this.props.processForm(user).then(this.props.closeModal);
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
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Your e-mail address"
                />
                <br />
            </>;

        const demoButton = this.props.signedUp ? 
            <button className="demo-login" onClick={this.loginDemoAcc}>Log in with demo account</button> 
            : 
            null;

        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <div className="session-form">
                        <h2>{this.props.formHeader}</h2>
                        {emailField}
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Your username"
                        />
                        <br />
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}  
                                placeholder="Your password"         
                        />
                        <br />
                        {this.renderErrors()}
                        <input className="input-submit" type="submit" value="Continue"/>
                        <br />
                        {demoButton}
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);