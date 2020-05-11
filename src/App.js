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
    },
  ]);

  useEffect(() => {
    console.log(view);
  }, [view]);

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
      description: (
        <p>
          Various business offices line the street. The town entrance is to the
          west. To the East you can see what looks like a high school in the
          distance.
        </p>
      ),
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
