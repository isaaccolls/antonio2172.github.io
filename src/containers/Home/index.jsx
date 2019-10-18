import React, { Component } from 'react';
import { Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from '../../components/ProgressBar/';
import me from '../../assets/images/me.JPG';
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
        console.log(skills);

        return (
            <Container id="home-container" className="min-vh-100 py-5 px-5" fluid={true}>
                <Row className="text-center">
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas","hand-peace"]} /></h3>
                            <h3>Resilience</h3>
                            <p className="text-center">Always happy with positive attitude <a className="text-decoration-none" href="https://en.wikipedia.org/wiki/Hakuna_matata" target="_blank" rel="noopener noreferrer">#hakunaMatata</a>.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "lightbulb"]} /></h3>
                            <h3>Proactive</h3>
                            <p className="text-center">Transforming ideas in actions and taking its responsibilities.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "users"]} /></h3>
                            <h3>Team work</h3>
                            <p className="text-center">Each and every individual’s personal opinion matters.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "sitemap"]} /></h3>
                            <h3>Leadership</h3>
                            <p className="text-center">Just listening and understanding to take a common goal.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "handshake"]} /></h3>
                            <h3>Committed</h3>
                            <p className="text-center">Understanding consequences and impacts on the final product.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="ability-wrapper">
                            <h3 className="ability-icon"><FontAwesomeIcon icon={["fas", "book-reader"]} /></h3>
                            <h3>Self learner</h3>
                            <p className="text-center">Formulating learning goals in an ever changing world.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={6} className="text-center my-auto">
                        <div>
                            <Image src={me} rounded fluid className="profile-pic" />
                            <h1 className="mt-3">Who's this guy?</h1>
                            <p className="text-justify">Design and implementation specialist of applications that involve hardware and software to solve problems on technological field.</p>
                        </div>
                    </Col>
                    <Col xs={6} className="text-center">
                        <div>
                            <Row>
                                <Col xs={12}>
                                    <h1>Skills</h1>
                                    <p className="text-left">Since the beginning of my career, I have tried to be agnostic about technology. Where the most important to keep in mind is learning and implementing the best tool to give the best solution.</p>
                                </Col>
                            </Row>
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
                                            <Col xs={12} className="skill-progress-bar">
                                                <ProgressBar skill={skill} />
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
