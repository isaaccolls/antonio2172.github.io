import React, { Component } from 'react';
import { Container, Row, Col, Image, ProgressBar, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../assets/images/me.JPG'
import './Home.css';

class Home extends Component {

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
            <Container id="home-container" className="h-100 min-h-100 py-5 px-5" fluid={true}>
                <Row className="text-center">
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas","hand-peace"]} /></h3>
                            <h3>Resilience</h3>
                            <p className="text-justify">Always happy with positive attitude <a className="text-decoration-none" href="https://en.wikipedia.org/wiki/Hakuna_matata" target="_blank" rel="noopener noreferrer">#hakunaMatata</a>.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "lightbulb"]} /></h3>
                            <h3>Proactive</h3>
                            <p className="">Transforming ideas in actions and taking its responsibilities.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "users"]} /></h3>
                            <h3>Team work</h3>
                            <p className="text-justify">Each and every individual’s personal opinion matters.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "sitemap"]} /></h3>
                            <h3>Leadership</h3>
                            <p className="text-justify">Just listening and understanding to take a common goal.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "handshake"]} /></h3>
                            <h3>Committed</h3>
                            <p className="text-justify">Understanding consequences and impacts on the final product.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "book-reader"]} /></h3>
                            <h3>Self learner</h3>
                            <p className="text-justify">Taking the initiative to formulating learning goals in an ever changing world.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs={6} className="text-center my-auto">
                        <div className="description-wrapper">
                            <Image src={me} rounded fluid className="profile-pic" />
                            <h1 className="mt-2">Who's this guy?</h1>
                            <p className="text-justify">Design and implementation specialist of applications that involve hardware and software to solve problems on technological field.</p>
                        </div>
                    </Col>
                    <Col xs={6} className="text-center">
                        <div className="skills-wrapper">
                            <h1>Skills</h1>
                            <p className="text-justify skills-description">Since the beginning of my career, I have tried to be agnostic about technology. Where the most important to keep in mind is learning and implementing the best tool to give the best solution.</p>
                            {
                                error ?
                                    <Alert variant="danger">{`Error: ${error}`}</Alert> :
                                    null
                            }
                            {
                                isLoading ? 
                                <Spinner animation="grow" variant="dark" /> :
                                skills.map(skill =>
                                        <Row key={`${skill.skill.replace(/\s/g, '').toLowerCase()}`} className="text-justify" noGutters={true}>
                                            <Col xs={{ span: 4, offset: 2 }}>
                                                <p className="skill-item">{skill.skill}</p>
                                            </Col>
                                            <Col xs={4}>
                                                <ProgressBar now={skill.percent} label={`${skill.percent}%`} />
                                            </Col>
                                        </Row>
                                    )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;