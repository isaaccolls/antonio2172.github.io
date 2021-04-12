import React from 'react';
import CustomParticles from './CustomParticles';
import styles from './HomeBanner.module.css';
import headerBorder from '../../assets/images/header-border.svg';

const HomeBanner = () => (
  <div className={`d-flex align-items-start flex-column ${styles.wrapper}`}>
    <CustomParticles />
    <div className={`my-auto mx-auto text-center py-2 px-4 py-sm-3 px-sm-5 ${styles.tittle}`}>
      <h1>
        Hey, I&apos;m
        {' '}
        <br className={`.d-none .d-sm-block ${styles.hide}`} />
        <strong>
          <em>Isaac Colls</em>
        </strong>
      </h1>
      <p className={`my-1 ${styles.hide}`}>Electronic and Computer Engineering</p>
      <p className={`my-1 ${styles.hide}`}>&</p>
      <p className={`my-1 ${styles.hide}`}>Full Stack developer</p>
    </div>
    <div className="w-100 mt-auto">
      <img className="w-100 h-100" src={headerBorder} alt="header-border" />
    </div>
  </div>
);

export default HomeBanner;
