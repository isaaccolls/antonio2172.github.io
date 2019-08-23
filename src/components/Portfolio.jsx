import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Portfolio.css';

export default class News extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h2>Projects</h2>
                </Row>
                <Row>
                    <Col xs={12} sm={8} className="main-section">
                        <p>We'll lay all these little funky little things in there. Fluff it up a little and hypnotize it.</p>
                        <p>Be so very light. Be a gentle whisper.</p>
                        <p>The least little bit can do so much. Just let these leaves jump off the brush</p>
                        <p>If there's two big trees invariably sooner or later there's gonna be a little tree. In your world you can create anything you desire.</p>
                        <p>I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green.</p>
                    </Col>
                    <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/KVEE0251.JPG" />
                        <p>Pretend you're water. Just floating without any effort. Having a good day. We're trying to teach you a technique here and how to use it. Let's put some happy little clouds in our world.</p>
                        <p>Put your feelings into it, your heart, it's your world. If we're gonna walk though the woods, we need a little path. Let your heart take you to wherever you want to be.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}