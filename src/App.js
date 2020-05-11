import React, { useState, useEffect } from 'react';
import axios from 'axios';

import View from './components/View.js';
import Text from './components/Text.js';
import Controls from './components/Controls.js';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const saveData = window.localStorage;
  const [view, setView] = useState('startMenu');
  const [lookItem, setLookItem] = useState({});
  const [lookObject, setLookObject] = useState({});
  const [useObject, setUseObject] = useState({});
  const [ammoCount, setAmmoCount] = useState(6);
  const [cigCount, setCigCount] = useState(20);
  const [contacts, setContacts] = useState([]);
  const [caseFiles, setCaseFiles] = useState([
    {
      title: 'Mission Briefing',
      content:
        'The body of a young girl was found in a remote town called Goodwood. Meet with the Sheriff of Goodwood and begin investigation in regard to [REDACTED].',
      image: './assets/images/laura.jpg',
    },
  ]);
  const [lookCaseFile, setLookCaseFile] = useState({});
  const [lookLocation, setLookLocation] = useState({});

  useEffect(() => {
    console.log(lookLocation);
  }, [lookLocation]);

  const objects = {
    wreckedCar: {
      dialogueName: 'car',
      name: 'Agency Car',
      description: "The car is a total wreck. Won't be leaving anytime soon.",
      lookDialogue:
        "Damn, what a mess! The Agency won't be happy about this...",
      image: './assets/images/wreckedCar.jpg',
    },
    entranceSign: {
      name: 'Town Entrance Sign',
      dialogueName: 'sign',
      description: "'Welcome to Goodwood'",
      lookDialogue: 'Not many  towns left like this.',
      image: './assets/images/entranceSign.png',
    },
  };

  const items = {
    cigarettes: {
      menuName: 'Cigarettes',
      description: `My favorite brand! There are ${cigCount} left.`,
      image: './assets/images/cigarettes.jpg',
    },
    badge: {
      menuName: 'Badge',
      description: 'My license from the Agency.',
      image: './assets/images/badge.png',
    },
    gun: {
      menuName: '38 Special',
      description: `My trusty sidearm. Hopefully shouldn't have to use it. There are ${ammoCount} rounds loaded.`,
      image: './assets/images/gun.png',
    },
  };

  const examineObject = (e) => {
    const objectsArray = Object.values(objects);
    const object = objectsArray.find((object) => {
      return object.dialogueName === e.target.innerText;
    });

    setLookObject(object);

    setView('lookObject');
  };

  const examineLocation = (e) => {
    const locationsArray = Object.values(locations);
    console.log(e.target);
    const location = locationsArray.find((location) => {
      return location.name === e.target.innerText;
    });
    console.log(location);
    setLookLocation(location);

    setView('lookLocation');
  };

  const locations = {
    outskirts: {
      name: 'Outskirts of Town',
      east: 'townEntrance',
      description: (
        <p>
          Dense fir trees line the narrow road.
          <br />
          Your{' '}
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
      west: 'outskirts',
      east: 'streetA',
      description: (
        <p>
          A{' '}
          <b className="interactive" onClick={examineObject}>
            sign
          </b>{' '}
          stands next to the road. The outskirts of town are to the West.
          Further East are some buildings.
        </p>
      ),
      image: './assets/images/buildings.jpg',
    },
    streetA: {
      district: 'Municipal District',
      name: 'Street A',
      west: 'townEntrance',
      east: 'streetB',
      description: (
        <p>
          Various business offices line the street. The town entrance is to the
          west. To the East you can see what looks like a high school in the
          distance.
        </p>
      ),
      image: './assets/images/buildings2.jpg',
    },
    streetB: {
      district: 'Municipal District',
      name: 'Street B',
      west: 'streetA',
      south: 'streetC',
      description: (
        <p>
          The street turns South, alongside the schoolgrounds. A path to the
          North leads behind the schoolto the sports stadium.
        </p>
      ),
      image: './assets/images/schoolSide.gif',
    },
    streetC: {
      district: 'Municipal District',
      name: 'Street C',
      east: 'streetE',
      north: 'streetB',
      south: 'streetD',
      description: (
        <p>
          To the South, the street continues further into the district. The road
          forks to the East, in front of the school entrance.
        </p>
      ),
      image: './assets/images/schoolSide.gif',
    },
    streetE: {
      district: 'Municipal District',
      name: 'Street E',
      west: 'streetC',
      description: (
        <p>
          <b className="location" onClick={examineLocation}>
            Goodwood High School
          </b>{' '}
          stands along the road, which continues East into the next district.
          You can see houses in the distance.
        </p>
      ),
      image: './assets/images/school.png',
    },
    streetD: {
      district: 'Municipal District',
      name: 'Street D',
      north: 'streetC',
      west: 'streetG',
      south: 'streetF',
      description: (
        <p>
          The school can be seen in the distance to the North. The road
          continues South into the district. There is a fork in the road to the
          West. It looks like the sherrif's office is on the corner.
        </p>
      ),
      image: './assets/images/school.png',
    },
    streetG: {
      district: 'Municipal District',
      name: 'Street G',
      east: 'streetD',
      west: 'streetH',
      description: (
        <p>
          The Goodwood Sheriff's Office stands on the corner of the block. To
          the East, the road splits, going North and South. Further West, you
          see what appears to be a hospital.
        </p>
      ),
      image: './assets/images/sherriffOffice.gif',
    },
    streetH: {
      district: 'Municipal District',
      name: 'Street H',
      east: 'streetG',
      description: (
        <p>
          The road ends at the parking lot for Goodwood General Hospital. A
          small detachment from the Hospital looks to be the morgue. Back to the
          East, the road continues past the sheriff's office.
        </p>
      ),
      image: './assets/images/hospital.jpg',
    },
    streetF: {
      district: 'Municipal District',
      name: 'Street F',
      north: 'streetD',
      description: (
        <p>
          From here you can see a large lake. To the North, the road leads into
          the district. You can see the sheriff's office in the distance. To the
          South, the road continues into the next district. Several tall
          buildings shape the skyline.
        </p>
      ),
      image: './assets/images/school.png',
    },

    school: {
      district: 'Municipal District',
      name: 'Goodwood High School',
      description: (
        <p>
          "Home of the Fighting Shrimp"
          <br />
          <br />
          Huh.
        </p>
      ),
      image: './assets/images/school.png',
    },
  };

  const [currentLocation, setCurrentLocation] = useState(locations.outskirts);
  const [inventory, setInventory] = useState([
    items.cigarettes,
    items.badge,
    items.gun,
  ]);

  return (
    <div id="App">
      <View
        view={view}
        lookItem={lookItem}
        lookObject={lookObject}
        currentLocation={currentLocation}
        lookCaseFile={lookCaseFile}
      />
      <Text
        view={view}
        setView={setView}
        currentLocation={currentLocation}
        inventory={inventory}
        lookObject={lookObject}
        setLookObject={setLookObject}
        lookItem={lookItem}
        setLookItem={setLookItem}
        contacts={contacts}
        caseFiles={caseFiles}
        lookCaseFile={lookCaseFile}
        setLookCaseFile={setLookCaseFile}
        lookLocation={lookLocation}
        setLookLocation={setLookLocation}
      />
      <Controls
        view={view}
        setView={setView}
        locations={locations}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
    </div>
  );
};

export default App;
