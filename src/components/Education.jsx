import React, { Component } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {
            education: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchEducation();
    }

    fetchEducation = () => {
        this.setState({ isLoading: true });
        fetch('data/education.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(education => this.setState({ education, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        let { education, isLoading, error } = this.state;
        education = education.sort((a, b) => {
            if (a.date > b.date) {
                return -1;
            } else {
                return 1;
            }
        });

        return (
            <div>
                <h3>Education</h3>
                <p>That's a crooked tree. We'll send him to Washington. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. In life you need colors.</p>
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
                            education.map(educationItem =>
                                    <VerticalTimelineElement
                                        key={`${educationItem.title.replace(/\s/g, '').toLowerCase()}`}
                                        className="vertical-timeline-element--work"
                                        date={`${educationItem.date}`}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<FontAwesomeIcon icon={["fas","graduation-cap"]} />}
                                    >
                                        <h4 className="vertical-timeline-element-title">{educationItem.title}</h4>
                                        <h6 className="vertical-timeline-element-subtitle">{ educationItem.college ? educationItem.college : educationItem.institute }</h6>
                                    </VerticalTimelineElement>
                                )
                        }
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={["fas", "star"]} />}
                        />
                    </VerticalTimeline>
                }
            </div>
        );
    }
}

export default Education;