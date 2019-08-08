import React, { Component } from 'react';
import { Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../assets/images/OFON6117.JPG'
import './Home.css';


export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        console.log("componentDidMount Home!");
        this.fetchSkills();
    }

    fetchSkills = () => {
        console.log("fetchSkills started 👽");
        this.setState({ isLoading: true });
        fetch('datas/skills.json')
            .then(response => {
                if (response.ok) {
                    console.log("respondio ok!");
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(skills => {
                // console.log(skills);
                this.setState({ skills, isLoading: false });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    };

    render() {

        console.log("render👽");
        console.log(this.state.isLoading);
        console.log("error: ", this.state.error);
        const { skills, isLoading, error } = this.state;
        console.log(skills);

        return (
            <Container id="homeContainer" className="h-100" fluid>
                <Row className="text-center">
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas","check-square"]} />
                        <h1>item 1</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fab", "linux"]} />
                        <h1>item 2</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["far","smile"]} />
                        <h1>item 3</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "coffee"]} />
                        <h1>item 4</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "coffee"]} />
                        <h1>item 5</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "coffee"]} />
                        <h1>item 6</h1>
                        <p>We start with a vision in our heart, and we put it on canvas.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col xs={6} className="">
                        <Image src={me} rounded className="profile-pic" />
                        <h3>Who's this guy?</h3>
                        <p>Design and implementation specialist of applications that involve hardware and software to solve problems on technological field.</p>
                    </Col>
                    <Col xs={6} className="">
                        <h3>Skills</h3>
                        <p>Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p>
                        {
                            error ?
                                <Alert variant="danger">{`Error: ${error}`}</Alert> :
                                null
                        }
                        {
                            isLoading ? 
                            <Spinner animation="grow" variant="dark" /> :
                            skills.map(skill =>
                                    <p key={`${skill.skill.replace(/\s/g, '').toLowerCase()}`}>
                                        {`${skill.skill} - ${skill.percent}`}
                                    </p>
                                )
                        }
                    </Col>
                </Row>
                <Row className="show-grid text-center">
                    <Col xs ={12}>
                        <p>link to more about me...</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}