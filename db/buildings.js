import React from 'react';

const buildings = {
  school: {
    district: 'Municipal District',
    name: 'Goodwood High School',

    description: (
      <p>
        'Home of the Fighting Shrimp'
        <br />
        <br />
        Huh.
      </p>
    ),
    image: './assets/images/school.png',
  },
  sheriffsDepartment: {
    district: 'Municipal District',
    name: "Goodwood Sheriff's Department",

    description: (
      <p>
        Goodwood's finest!
        <br />I bet there's hardly a need for police in this town... until now.
      </p>
    ),
    image: './assets/images/sherriffOffice.gif',
  },
  townHall: {
    district: 'Municipal District',
    name: 'Goodwood Town Hall',

    description: <p>Really digging the architecture!</p>,
    image: './assets/images/sherriffOffice.gif',
  },
};

export default buildings;
