import React from 'react';
import store from '../src/store.js';
import { examineObject, examineBuilding } from './functions.js';
const state = store.getState();

const locations = {
  outskirts: {
    name: 'Outskirts of Town',
    keyName: 'outskirts',
    east: 'townEntrance',
    description: (
      <p>
        Dense fir trees line the narrow road.
        <br />
        My{' '}
        <b className="interactive" onClick={examineObject}>
          car
        </b>{' '}
        sits in a smoking heap. The town lies further to the East.
      </p>
    ),
    image: './assets/images/forest.png',
  },
  townEntrance: {
    district: 'Municipal District',
    name: 'Town Entrance',
    keyName: 'townEntrance',
    west: 'outskirts',
    east: 'streetA',
    description: (
      <p>
        A{' '}
        <b className="interactive" onClick={examineObject}>
          sign
        </b>{' '}
        stands next to the road. The outskirts of town are to the West. Further
        East are some buildings.
      </p>
    ),
    image: './assets/images/buildings.jpg',
  },
  streetA: {
    district: 'Municipal District',
    name: 'Street A',
    keyName: 'streetA',
    west: 'townEntrance',
    east: 'streetB',
    description: (
      <p>
        Various business offices line the street. The town entrance is to the
        west. To the East I can see what looks like a high school in the
        distance.
      </p>
    ),
    image: './assets/images/buildings2.jpg',
  },
  streetB: {
    district: 'Municipal District',
    name: 'Street B',
    keyName: 'streetB',
    west: 'streetA',
    south: 'streetC',
    description: (
      <p>
        The street turns South, alongside the school grounds. A path to the
        North leads behind the school to the sports stadium.
      </p>
    ),
    image: './assets/images/schoolSide.gif',
  },
  streetC: {
    district: 'Municipal District',
    name: 'Street C',

    keyName: 'streetC',
    east: 'streetE',
    north: 'streetB',
    south: 'streetD',
    description: (
      <p>
        To the South, the street continues into the district past a fancy
        looking building. The road forks to the East, in front of the school
        entrance.
      </p>
    ),
    image: './assets/images/schoolSide.gif',
  },
  streetE: {
    district: 'Municipal District',
    name: 'Street E',

    keyName: 'streetE',
    west: 'streetC',
    description: (
      <p>
        <b className="location" onClick={examineBuilding}>
          Goodwood High School
        </b>{' '}
        stands along the road, which continues East into the next district. I
        can see houses in the distance.
      </p>
    ),
    image: './assets/images/school.png',
  },
  streetD: {
    district: 'Municipal District',
    name: 'Street D',

    keyName: 'streetD',
    north: 'streetC',
    west: 'streetG',
    south: 'streetF',
    description: (
      <p>
        <b className="location" onClick={examineBuilding}>
          Goodwood Town Hall
        </b>{' '}
        stands near a large lake. The school can be seen in the distance to the
        North. The road continues South into the district. There is a fork in
        the road to the West. It looks like the sheriff's department is on the
        corner.
      </p>
    ),
    image: './assets/images/school.png',
  },
  streetG: {
    district: 'Municipal District',
    name: 'Street G',

    keyName: 'streetG',
    east: 'streetD',
    west: 'streetH',
    description: (
      <p>
        The{' '}
        <b className="location" onClick={examineBuilding}>
          Goodwood Sheriff's Department
        </b>{' '}
        stands on the corner of the block. To the East, the road splits, going
        North and South. Further West, I see what appears to be a hospital.
      </p>
    ),
    image: './assets/images/sherriffOffice.gif',
  },
  streetH: {
    district: 'Municipal District',
    name: 'Street H',

    keyName: 'streetH',
    east: 'streetG',
    description: (
      <p>
        The road ends at the parking lot for Goodwood General Hospital. A small
        detachment from the Hospital looks to be the morgue. Back to the East,
        the road continues past the sheriff's department.
      </p>
    ),
    image: './assets/images/hospital.jpg',
  },
  streetF: {
    district: 'Municipal District',
    name: 'Street F',

    keyName: 'streetF',
    north: 'streetD',
    description: (
      <p>
        To the North, the road leads into the district. You can see the
        sheriff's department in the distance. To the South, the road continues
        into the next district, but is blocked by construction barriers. Several
        tall buildings shape the skyline.
      </p>
    ),
    image: './assets/images/school.png',
  },
};

export default locations;
