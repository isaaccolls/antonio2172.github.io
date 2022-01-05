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
import PropTypes from 'prop-types';
import { getProjects, getProjectCategory } from '../../reducers/projects';
import { fetchProjects, setProjectCategory } from '../../actions/actions';
import PortfolioGallery from './PortfolioGallery';
import './Portfolio.css';

class PortfolioContainer extends Component {
  componentDidMount() {
    const { fetchProjectsAux, setProjectCategoryAux } = this.props;
    fetchProjectsAux();
    setProjectCategoryAux('all');
  }

  handleChange = (selectedCategory) => {
    const { setProjectCategoryAux } = this.props;
    setProjectCategoryAux(selectedCategory);
  };

  render() {
    const { projects, selectedCategory } = this.props;
    const categories = projects
      ? [...new Set(projects.map((portfolioItem) => portfolioItem.category))]
      : [];
    categories.unshift('all');
    return (
      <Container
        id="portfolio-container"
        className="min-vh-100 py-5 px-5"
        fluid
      >
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>
              We&aposll lay all these little funky little things in there. Fluff
              it up a little and hypnotize it.
            </p>
            <p>Be so very light. Be a gentle whisper.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            {/* {error && <Alert variant="danger">{`Error: ${error}`}</Alert>} */}
            {categories.length > 1 ? (
              <ToggleButtonGroup
                name="selectCategory"
                type="radio"
                value="selectedCategory"
                onChange={this.handleChange}
                className="mb-4"
              >
                {categories.map((categoriesItem) => (
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

PortfolioContainer.propTypes = {
  // eslint-disable-next-line
  fetchProjectsAux: PropTypes.object.isRequired,
  // eslint-disable-next-line
  setProjectCategoryAux: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  // eslint-disable-next-line
  projects: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  projects: getProjects(state),
  selectedCategory: getProjectCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjectsAux: (value) => dispatch(fetchProjects(value)),
  setProjectCategoryAux: (value) => dispatch(setProjectCategory(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
