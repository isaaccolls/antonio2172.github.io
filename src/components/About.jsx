import React, { Component } from 'react';
import { Container, Row, Col, Spinner, Alert, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workExperience: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchWorkExperience();
    }

    fetchWorkExperience = () => {
        this.setState({ isLoading: true });
        fetch('data/workExperience.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(workExperience => this.setState({ workExperience, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {

        let { workExperience, isLoading, error } = this.state;
        workExperience = workExperience.sort((a, b) => {
            if (a.dateStart > b.dateStart) {
                return -1;
            } else {
                return 1;
            }
        });

        return (
            <Container id="about-container" className="h-100 min-h-100 py-5 px-5" fluid={true}>
                <Row>
                    <Col xs={12}>
                        <h3>Work Experience</h3>
                        <p>We don't really know where this goes - and I'm not sure we really care. You have to make almighty decisions when you're the creator.</p>
                        <p>There isn't a rule. You just practice and find out which way works best for you. In this world, everything can be happy.</p>
                        {
                            error ?
                            <Alert variant="danger">{`Error: ${error}`}</Alert> :
                            null
                        }
                        {
                            isLoading ?
                            <Spinner animation="grow" variant="dark" /> :
                            <VerticalTimeline>
                                {
                                    workExperience.map(workItem =>
                                            <VerticalTimelineElement
                                                key={`${workItem.employer.replace(/\s/g, '').toLowerCase()}`}
                                                className="vertical-timeline-element--work"
                                                date={`${workItem.dateStart} - ${workItem.dateEnd}`}
                                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                icon={<FontAwesomeIcon icon={["fas","briefcase"]} />}
                                            >
                                                <h4 className="vertical-timeline-element-title">{workItem.position} {workItem.department ? ` - ${workItem.department}` : null}</h4>
                                                <h6 className="vertical-timeline-element-subtitle">{workItem.employer}</h6>
                                                <Accordion>
                                                    <Accordion.Toggle as={Button} variant="light" eventKey="0">
                                                        ...
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <p>{workItem.duties}</p>
                                                    </Accordion.Collapse>
                                                </Accordion>
                                            </VerticalTimelineElement>
                                        )
                                }
                                <VerticalTimelineElement
                                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                    icon={<FontAwesomeIcon icon={["fas", "star"]} />}
                                />
                            </VerticalTimeline>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3>Education</h3>
                        <p>We don't really know where this goes - and I'm not sure we really care. You have to make almighty decisions when you're the creator.</p>
                        <p>There isn't a rule. You just practice and find out which way works best for you. In this world, everything can be happy.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}