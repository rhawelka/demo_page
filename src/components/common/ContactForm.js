import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import CenteredModal from './Modal';

class ContactForm extends Component {

    state = {
        email: '',
        nickname: '',
        subject: '',
        message: '',
        cursorAllowed: 'not-allowed',
        modalShow: false
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
        this.handleShowModal();   
    }

    handleShowModal = () => {
        this.setState({modalShow: true});
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
            <Form style={{fontFamily: "oswald"}}
                className="w-100 p-2 formValid"
                ref={this.formRef}
                onSubmit={this.handleSubmit}>
                <Form.Group className="m-0">
                    <Form.Label htmlFor="email"></Form.Label>
                    <Form.Control
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        required/>
                </Form.Group>
                <Form.Group className="m-0">
                    <Form.Label htmlFor="nickname"></Form.Label>
                    <Form.Control
                        name="nickname"
                        id="nickname"
                        type="text"
                        placeholder="Name"
                        value={this.state.nickname}
                        onChange={this.handleNicknameChange}/>
                </Form.Group>
                <Form.Group className="m-0">
                    <Form.Label htmlFor="subject"></Form.Label>
                    <Form.Control
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.handleSubjectChange}/>
                </Form.Group>
                <Form.Group className="m-0">
                    <Form.Label htmlFor="message"></Form.Label>
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
                <CenteredModal
                    emailData={this.state}
                    show={this.state.modalShow}
                    onHide={() => {
                    this.setState({email: '', nickname: '', subject: '', message: '',cursorAllowed: "not-allowed",modalShow: false});
                }}/>
            </Form>

        )
    }
}

export default ContactForm;

