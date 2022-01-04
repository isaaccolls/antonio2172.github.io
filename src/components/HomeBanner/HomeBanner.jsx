import React from 'react';
import CustomParticles from './CustomParticles';
import styles from './HomeBanner.module.css';
import headerBorder from '../../assets/images/header-border.svg';

const HomeBanner = () => (
  <div className={`d-flex align-items-start flex-column ${styles.wrapper}`}>
    <CustomParticles />
    <div
      className={`my-auto mx-auto text-center py-2 px-2 py-sm-3 px-sm-5 ${styles.title}`}
    >
      <h1>
        Hey, I&apos;m <br className={`.d-none .d-sm-block ${styles.hide}`} />
        <span className="display-4">Isaac Colls!</span>
      </h1>
      <p className={`my-1 ${styles.hide}`}>
        Electronic and Computer Engineering{' '}
        <span role="img" aria-label="nerd face">
          🤓
        </span>
      </p>
      <p className={`my-1 ${styles.hide}`}>&</p>
      <p className={`my-1 ${styles.hide}`}>
        Full Stack developer{' '}
        <span role="img" aria-label="ninja">
          🥷
        </span>
      </p>
    </div>
    <div className="w-100 mt-auto">
      <img className="w-100 h-100" src={headerBorder} alt="header-border" />
    </div>
  </div>
);

export default HomeBanner;
