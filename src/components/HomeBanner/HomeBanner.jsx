import React from 'react';
import styles from './HomeBanner.module.css';

const HomeBanner = () => (
  <div className={`d-flex align-items-start flex-column ${styles.wrapper}`}>
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
    <div className={`w-100 ${styles.header}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon className="svg--sm" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
        <polygon className="svg--lg" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
      </svg>
    </div>
  </div>
);

export default HomeBanner;
