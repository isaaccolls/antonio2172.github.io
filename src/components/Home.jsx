import React, { Component } from 'react';
import { Container, Row, Col, Image, ProgressBar, Spinner, Alert } from 'react-bootstrap';
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
        this.fetchSkills();
    }

    fetchSkills = () => {
        this.setState({ isLoading: true });
        fetch('data/skills.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(skills => this.setState({ skills, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    };

    render() {
        let { skills, isLoading, error } = this.state;
        skills = skills.sort((a, b) => {
            if (a.order > b.order) {
                return 1;
            } else {
                return -1;
            }
        });

        return (
            <Container id="homeContainer" className="h-100" fluid>
                <Row className="text-center">
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas","hand-peace"]} />
                        <h1>Resilience</h1>
                        <p className="text-justify">Always happy with positive attitude <a href="https://en.wikipedia.org/wiki/Hakuna_matata" target="_blank" rel="noopener noreferrer">#hakunaMatata</a>.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "lightbulb"]} />
                        <h1>Proactive</h1>
                        <p className="text-justify">Transforming ideas in actions and taking its responsibilities.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "users"]} />
                        <h1>Team work</h1>
                        <p className="text-justify">Each and every individual’s personal opinion matters.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "sitemap"]} />
                        <h1>Leadership</h1>
                        <p className="text-justify">Just listening and understanding to take a common goal.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "handshake"]} />
                        <h1>Committed</h1>
                        <p className="text-justify">Understanding consequences and impacts on the final product.</p>
                    </Col>
                    <Col xs={2}>
                        <FontAwesomeIcon icon={["fas", "book-reader"]} />
                        <h1>Self learner</h1>
                        <p className="text-justify">Taking the initiative to formulating learning goals in an ever changing world..</p>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs={6} className="text-center">
                        <Image src={me} rounded className="profile-pic" />
                        <h3>Who's this guy?</h3>
                        <p className="text-justify">Design and implementation specialist of applications that involve hardware and software to solve problems on technological field.</p>
                    </Col>
                    <Col xs={6} className="text-center">
                        <h3>Skills</h3>
                        <p className="text-justify">Since the beginning of my career, I have tried to be agnostic about technology. Where the most important to keep in mind is learning and implementing the best tool to give the best solution.</p>
                        {
                            error ?
                                <Alert variant="danger">{`Error: ${error}`}</Alert> :
                                null
                        }
                        {
                            isLoading ? 
                            <Spinner animation="grow" variant="dark" /> :
                            skills.map(skill =>
                                    <Row key={`${skill.skill.replace(/\s/g, '').toLowerCase()}`} className="text-justify">
                                        <Col xs={5}>
                                            <p>{skill.skill}</p>
                                        </Col>
                                        <Col xs={7}>
                                            <ProgressBar variant="dark" now={skill.percent} label={`${skill.percent}%`} />
                                        </Col>
                                    </Row>
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