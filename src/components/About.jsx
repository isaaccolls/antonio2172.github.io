import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';
import exampleImage from '../assets/images/snow-pizza.JPG'

export default class About extends Component {
    render() {
        return (
            <Container id="about-container" className="h-100 min-h-100 py-5 px-5">
                <Col xs={12} sm={8}>
                    <Image src={exampleImage} className="about-profile-pic" rounded />
                    <h3>More pizza?</h3>
                    <p>We don't really know where this goes - and I'm not sure we really care. You have to make almighty decisions when you're the creator.</p>
                    <p>There isn't a rule. You just practice and find out which way works best for you. In this world, everything can be happy.</p>
                    <p>You gotta think like a tree. A thin paint will stick to a thick paint.</p>
                    <p>You can bend rivers. But when I get home, the only thing I have power over is the garbage.</p>
                    <p>This is probably the greatest thing to happen in my life - to be able to share this with you. La- da- da- da- dah. Just be happy.</p>
                </Col>
            </Container>
        );
    }
}