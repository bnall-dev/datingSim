import React from 'react';
import store from '../src/store.js';

const state = store.getState();

const items = {
  cigarettes: {
    menuName: 'Cigarettes',
    description: `My favorite brand! There are ${state.cigCount} left.`,
    image: './assets/images/cigarettes.jpg',
  },
  badge: {
    menuName: 'Badge',
    description: 'My license from the Agency.',
    image: './assets/images/badge.png',
  },
  gun: {
    menuName: '38 Special',
    description: `My trusty sidearm. Hopefully shouldn't have to use it. There are ${state.ammoCount} rounds loaded.`,
    image: './assets/images/gun.png',
  },
};

export default items;
