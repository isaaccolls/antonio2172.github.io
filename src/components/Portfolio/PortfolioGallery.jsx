import React from 'react';
import { Image } from 'react-bootstrap';
import './PortfolioGallery.css';

const PortfolioGallery = ({ selectedCategory, projects }) =>
  projects.map(
    (project, i) =>
      (selectedCategory === project.category || selectedCategory === 'all') && (
        <a
          className="tex-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          href={project.repoUrl}
          key={project.category.replace(/\s/g, '') + '-' + i}
        >
          <Image
            className="mx-4 mb-3 image-portfolio-gallery"
            src={project.imageUrl}
            rounded={true}
          />
        </a>
      ),
  );

export default PortfolioGallery;
