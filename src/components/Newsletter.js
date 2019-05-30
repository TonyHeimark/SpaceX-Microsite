import React from "react";
import Zoom from "react-reveal/Zoom";
import "../styles/Newsletter.css";

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state={
            validation: undefined,
            messageClass: "newsletter_message",
            inputClass: "newsletter_input"
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleInput() {
        if(this.state.validation !== undefined){
            this.setState(() => ({
                validation: undefined,
                messageClass: "newsletter_message",
                inputClass: "newsletter_input"
            }))
        } 
    }

    handleSubmit(e) {

        if (e.target.parentElement.children[3].value !== ""){
            let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
            if (regex.test(e.target.parentElement.children[3].value)){
                this.setState(() => ({
                    validation: <span>Welcome on board!</span>,
                    messageClass: "newsletter_message newsletter_message--success",
                    inputClass: "newsletter_input newsletter_input--success"
                }))
            } else {
                this.setState(() => ({
                    validation: <span>Your email is not valid</span>,
                    messageClass: "newsletter_message newsletter_message--error",
                    inputClass: "newsletter_input newsletter_input--error"
                }))
            }
        } else {
            this.setState(() => ({
                validation: <span>Please fill in your email.</span>,
                messageClass: "newsletter_message newsletter_message--error",
                inputClass: "newsletter_input newsletter_input--error"
            }))
        }
    }

    handleKeyDown(e) {
        if(e.key === "Enter"){
            this.handleSubmit(e);
        }
    }

    render() {
        return (
            <Zoom>
                <div className="newsletter">
                    <h2 className="newsletter_title">Subscribe to our Newsletter</h2>
                    <p className="newsletter_paragraph">If you want to stay up to date with our launches and our exciting plans for the future. Sign up now!</p>
                    <span className={this.state.messageClass}>{this.state.validation}</span>
                    <input onKeyDown={this.handleKeyDown} onInput={this.handleInput} className={this.state.inputClass} type="email" placeholder="JaneDoe@gmail.com" />
                    <button type="submit" onClick={this.handleSubmit} className="button newsletter_button">Submit</button>
                </div>
            </Zoom>
        )
    }

}
