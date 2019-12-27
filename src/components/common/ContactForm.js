import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import ShowModal from './ShowModal';

class ContactForm extends Component {

    state = {
        email: '',
        nickname: '',
        subject: '',
        message: '',
        cursorAllowed: 'not-allowed'
    }

    formRef = React.createRef();

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
        this.unlockBtn();
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value});
        this.unlockBtn();
    }

    handleNicknameChange = (e) => {
        this.setState({nickname: e.target.value})
    }

    handleSubjectChange = (e) => {
        this.setState({subject: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(this.formRef)
    }

    unlockBtn() {
        const form = document.querySelector('.formValid');
        form.checkValidity()
            ? this.setState({cursorAllowed: "pointer"})
            : this.setState({cursorAllowed: "not-allowed"});
    }

    render() {

        const enabled = this.state.email && this.state.message;

        return (
            <Form className="w-100 p-2 formValid" ref={this.formRef} onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="nickname">Nickname:</Form.Label>
                    <Form.Control
                        name="nickname"
                        id="nickname"
                        type="text"
                        placeholder="Nickname"
                        value={this.state.nickname}
                        onChange={this.handleNicknameChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="subject">Subject:</Form.Label>
                    <Form.Control
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.handleSubjectChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message:</Form.Label>
                    <Form.Control
                        name="message"
                        id="message"
                        type="text"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                        required/>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="mt-3"
                    disabled={!enabled}
                    style={{
                    cursor: this.state.cursorAllowed
                }}>
                    Submit
                </Button>
                <ShowModal emailData={this.state}/>
            </Form>

        )
    }
}

export default ContactForm;