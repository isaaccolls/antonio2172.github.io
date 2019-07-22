import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './HomeBanner.css';

export default class HomeBanner extends Component {

    render() {
        return (
            <Container id="homeBanner" className="h-100" fluid>
                <Row className="h-100 test">
                    <Col xs={12} className="my-auto text-center"><h1>Hello, I'm <strong>Isaac Colls</strong>.</h1><h2>Electronic and Computer Engineering</h2></Col>
                </Row>
            </Container>
        );
    }
}


/*<Container id="homeBanner" className="h-100" fluid>
                <Row className="align-items-center justify-content-center h-100">
                    <col></col>
                    <h1>Hello, I'm <strong>Isaac Colls</strong>.</h1>
                    <h2>Electronic and Computer Engineering</h2>
                </Row>
            </Container>*/