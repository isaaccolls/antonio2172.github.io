import React from 'react';
import Particles from 'react-particles-js';
import styles from './CustomParticles.module.css';

const particlesOptions = {
  particles: {
    color: {
      value: '#ededed',
    },
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: 'bottom',
      out_mode: 'out',
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
};

const CustomParticles = () => (
  <Particles params={particlesOptions} className={styles.particles} />
);

export default CustomParticles;
