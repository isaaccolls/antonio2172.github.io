import React, { Component } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { fullName, message } = this.state;
    const subject = `${fullName} contact from isaaccolls.website`;
    document.location = `mailto:colls.isaac@gmail.com?subject=${subject}&body=${message}`;
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullName, message } = this.state;
    return (
      <>
        <Row>
          <Col
            xs={12}
            sm={{ span: 8, offset: 2 }}
            className="text-center mb-4 px-1 px-sm-0"
          >
            <h2>Have a question or want to work together?</h2>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 4, offset: 4 }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlid="formContactName">
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  value={fullName}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  controlid="formContactMessage"
                  as="textarea"
                  rows="5"
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button type="submit" className="float-right">
                Submit
                {' '}
                <FontAwesomeIcon icon={['fas', 'paper-plane']} />
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default Contact;
