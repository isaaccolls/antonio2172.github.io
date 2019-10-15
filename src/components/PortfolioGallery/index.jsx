import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './PortfolioGallery.css';

class PortfolioGallery extends Component {
    render() {
        const { selectedCategory, portfolio } = this.props;
        if (!selectedCategory) {
            return null;
        }

        return (
            portfolio.map((portfolioItem, i) => {
                if (selectedCategory === portfolioItem.category || selectedCategory === "all") {
                    return (
                        <a
                            className="tex-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolioItem.repoUrl}
                            key={portfolioItem.category.replace(/\s/g, '') + "-" + i}
                        >
                            <Image className="mx-4 mb-3 image-portfolio-gallery" src={portfolioItem.imageUrl} rounded={true} />
                        </a>
                    )
                }
                return null;
            })
        );
    }
}

export default PortfolioGallery;