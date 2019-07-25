import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import ParticleComponent from './ParticleComponent';
import './HomeBanner.css';

class HomeBanner extends Component {

    render() {
        return (
            <div className="h-100">
                <ParticleComponent />
                <Container id="homeBannerContainer" className="h-100" fluid>
                    <Row className="h-100">
                        <Col xs={3}></Col>
                        <Col xs={6} className="my-auto text-center">
                            <div className="homeBannerTittle">
                                <h1>Hello, I'm <strong>Isaac Colls</strong></h1>
                                <h2>Electronic and Computer Engineering</h2>
                            </div>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeBanner;