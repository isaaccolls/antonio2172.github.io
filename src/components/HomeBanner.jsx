import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './HomeBanner.css';

export default class HomeBanner extends Component {
    render() {
        return (
            <div>
                <Image src="assets/KVEE0251.JPG" className="header-image" />
            </div>
        );
    }
}
