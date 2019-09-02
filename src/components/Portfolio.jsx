import React, { Component } from 'react';
import { Container, Row, Col, ToggleButtonGroup, ToggleButton, Spinner, Alert } from 'react-bootstrap';
import PortfolioGallery from './PortfolioGallery';
import './Portfolio.css';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolio: [],
            isLoading: false,
            error: null,
            selectedCategory: "all",
        }
    }

    componentDidMount() {
        this.fetchPortfolio();
    }

    fetchPortfolio = () => {
        this.setState({ isLoading: true });
        fetch('data/portfolio.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(portfolio => {
                this.setState({ portfolio, isLoading: false })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    handleChange = (selectedCategory) => {
        this.setState({ selectedCategory });
    };

    render() {
        let { portfolio, isLoading, error, selectedCategory } = this.state;
        let categories = [...new Set(portfolio.map(portfolioItem => portfolioItem.category))];
        categories.unshift("all");

        return (
            <Container id="portfolio-container" className="h-100 min-h-100 py-5" fluid={true}>
                <Row>
                    <Col xs={12}>
                        <h2>Projects</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>We'll lay all these little funky little things in there. Fluff it up a little and hypnotize it.</p>
                        <p>Be so very light. Be a gentle whisper.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center">
                        {
                            error &&
                            <Alert variant="danger">{`Error: ${error}`}</Alert>
                        }
                        {
                            isLoading &&
                                <Spinner animation="grow" variant="dark" />
                        }
                        {
                            categories.length > 0 &&
                            <ToggleButtonGroup
                                name="selectCategory"
                                type="radio"
                                value={selectedCategory}
                                onChange={this.handleChange}
                                className="mb-4"
                            >
                                {
                                    categories.map((categoriesItem) =>
                                        <ToggleButton key={categoriesItem} value={categoriesItem}>{categoriesItem}</ToggleButton>
                                    )
                                }
                            </ToggleButtonGroup>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center">
                        <PortfolioGallery selectedCategory={selectedCategory} portfolio={portfolio} />
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Portfolio;