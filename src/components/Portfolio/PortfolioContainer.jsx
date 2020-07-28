import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Spinner,
} from 'react-bootstrap';
import { getProjects, getProjectCategory } from '../../reducers/projects';
import { fetchProjects, setProjectCategory } from '../../actions/actions';
import PortfolioGallery from './PortfolioGallery';
import './Portfolio.css';

class PortfolioContainer extends Component {
  componentDidMount() {
    this.props.fetchProjects();
    this.props.setProjectCategory('all');
  }

  handleChange = selectedCategory => {
    this.props.setProjectCategory(selectedCategory);
  };

  render() {
    const { projects, selectedCategory } = this.props;
    let categories = projects
      ? [...new Set(projects.map(portfolioItem => portfolioItem.category))]
      : [];
    categories.unshift('all');
    return (
      <Container
        id="portfolio-container"
        className="min-vh-100 py-5 px-5"
        fluid={true}
      >
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>
              We'll lay all these little funky little things in there. Fluff it
              up a little and hypnotize it.
            </p>
            <p>Be so very light. Be a gentle whisper.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            {/*{error && <Alert variant="danger">{`Error: ${error}`}</Alert>}*/}
            {categories.length > 1 ? (
              <ToggleButtonGroup
                name="selectCategory"
                type="radio"
                value={'selectedCategory'}
                onChange={this.handleChange}
                className="mb-4"
              >
                {categories.map(categoriesItem => (
                  <ToggleButton key={categoriesItem} value={categoriesItem}>
                    {categoriesItem}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            ) : (
              <Spinner animation="grow" variant="dark" />
            )}
          </Col>
        </Row>
        {categories.length > 1 && (
          <Row>
            <Col xs={12} className="text-center">
              <PortfolioGallery
                selectedCategory={selectedCategory}
                projects={projects}
              />
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projects: getProjects(state),
  selectedCategory: getProjectCategory(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: value => dispatch(fetchProjects(value)),
  setProjectCategory: value => dispatch(setProjectCategory(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
