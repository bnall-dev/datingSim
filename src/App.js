import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import View from './components/View.js';
import Text from './components/Text.js';
import Controls from './components/Controls.js';
import objects from '../db/objects.js';
import items from '../db/items.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    cigCount: state.cigCount,
    ammoCount: state.ammoCount,
    currentLocation: state.currentLocation,
    view: state.view,
    lookItem: state.lookItem,
    lookObject: state.lookObject,
    lookBuilding: state.lookBuilding,
    lookCaseFile: state.lookCaseFile,
    currentScene: state.currentScene,
    sceneText: state.sceneText,
  };
};

const App = (props) => {
  const saveData = window.localStorage;

  const [contacts, setContacts] = useState([]);
  const [inventory, setInventory] = useState([
    items.cigarettes,
    items.badge,
    items.gun,
  ]);

  return (
    <div id="App">
      <View
        view={props.view}
        lookItem={props.lookItem}
        lookObject={props.lookObject}
        currentLocation={props.currentLocation}
        lookBuilding={props.lookBuilding}
        lookCaseFile={props.lookCaseFile}
      />
      <Text
        view={props.view}
        currentLocation={props.currentLocation}
        inventory={inventory}
        lookObject={props.lookObject}
        lookItem={props.lookItem}
        contacts={contacts}
        lookBuilding={props.lookBuilding}
        lookCaseFile={props.lookCaseFile}
        currentScene={props.currentScene}
        sceneText={props.sceneText}
      />
      <Controls
        view={props.view}
        currentLocation={props.currentLocation}
        currentScene={props.currentScene}
        sceneText={props.sceneText}
      />
    </div>
  );
};

export default connect(mapStateToProps, {})(App);
