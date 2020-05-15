import React from 'react';
import store from '../store.js';
import {
  changeView,
  changeCurrentLocation,
  changeCutscene,
  changeSceneText,
} from '../../db/actions.js';
import locations from '../../db/locations.js';
import cutscenes from '../../db/cutscenes.js';

const Controls = ({ view, currentLocation, currentScene, sceneText }) => {
  const locationsArray = Object.values(locations);

  const startNewGame = () => {
    store.dispatch(changeView('cutscene'));
    store.dispatch(changeCutscene(cutscenes.intro));
    store.dispatch(changeCurrentLocation(locations.outskirts));
  };

  const continueCutscene = () => {
    if (currentScene.text[sceneText + 1]) {
      store.dispatch(changeSceneText(sceneText + 1));
    } else {
      store.dispatch(changeSceneText(0));
      store.dispatch(changeView('gameplay'));
    }
  };
  const openGameMenu = () => {
    store.dispatch(changeView('gameMenu'));
  };
  const openInventory = () => {
    store.dispatch(changeView('inventory'));
  };
  const closeMenu = () => {
    store.dispatch(changeView('gameplay'));
  };
  const moveEast = () => {
    const location = locationsArray.find(
      (location) => location.keyName === currentLocation.east
    );
    store.dispatch(changeCurrentLocation(location));
  };
  const moveSouth = () => {
    const location = locationsArray.find(
      (location) => location.keyName === currentLocation.south
    );
    store.dispatch(changeCurrentLocation(location));
  };
  const moveNorth = () => {
    const location = locationsArray.find(
      (location) => location.keyName === currentLocation.north
    );
    store.dispatch(changeCurrentLocation(location));
  };
  const moveWest = () => {
    const location = locationsArray.find(
      (location) => location.keyName === currentLocation.west
    );
    store.dispatch(changeCurrentLocation(location));
  };

  const endLook = () => {
    store.dispatch(changeView('inventory'));
  };
  const closeApp = () => {
    store.dispatch(changeView('phone'));
  };

  const closeCaseFile = () => {
    store.dispatch(changeView('caseFiles'));
  };

  const openPhoneMenu = () => {
    store.dispatch(changeView('phone'));
  };

  const saveGame = () => {
    localStorage.clear();

    localStorage.setItem('currentLocation', currentLocation.name);
    store.dispatch(changeView('gameplay'));
  };
  const continueGame = () => {
    const locationsArray = Object.values(locations);
    const savedLocation = locationsArray.find((location) => {
      return location.name === localStorage.getItem('currentLocation');
    });
    store.dispatch(changeCurrentLocation(savedLocation));
    store.dispatch(changeView('gameplay'));
  };
  const quitGame = () => {
    store.dispatch(changeCurrentLocation(locations.outskirts));
    store.dispatch(changeView('startMenu'));
  };

  return (
    <div id="controlBox">
      {view === 'startMenu' && (
        <div id="startMenuControls">
          <button onClick={startNewGame}>New Game</button>
          <button onClick={continueGame}>Continue</button>
        </div>
      )}
      {view === 'gameplay' && (
        <div id="mainControls">
          <button onClick={openInventory}>Briefcase</button>
          <button onClick={openPhoneMenu}>Phone</button>
          <button onClick={openGameMenu}>Menu</button>
          <div id="movementButtons">
            {currentLocation.west && (
              <button onClick={moveWest}>Go West</button>
            )}
            {!currentLocation.west && <button disabled>Go West</button>}
            {currentLocation.north && (
              <button onClick={moveNorth}>Go North</button>
            )}
            {!currentLocation.north && <button disabled>Go North</button>}
            {currentLocation.south && (
              <button onClick={moveSouth}>Go South</button>
            )}
            {!currentLocation.south && <button disabled>Go South</button>}
            {currentLocation.east && (
              <button onClick={moveEast}>Go East</button>
            )}
            {!currentLocation.east && <button disabled>Go East</button>}
          </div>
        </div>
      )}
      {view === 'dialogue' && (
        <div id="talkControls">
          <button>Investigate</button>
          <button>Flirt</button>
          <button>Give Item</button>
        </div>
      )}
      {view === 'cutscene' && (
        <div id="cutsceneControls">
          <button onClick={continueCutscene}>Next</button>
        </div>
      )}

      {view === 'gameMenu' && (
        <div id="gameMenuControls">
          <button onClick={saveGame}>Save</button>
          <button onClick={continueGame}>Load</button>
          <button onClick={quitGame}>Quit</button>
          <button onClick={closeMenu}>Cancel</button>
        </div>
      )}
      {view === 'inventory' && (
        <div id="inventoryControls">
          <button onClick={closeMenu}>Back</button>
        </div>
      )}

      {view === 'phone' && (
        <div id="phoneControls">
          <button onClick={closeMenu}>Back</button>
        </div>
      )}
      {view === 'contacts' && (
        <div id="contactsControls">
          <button onClick={closeApp}>Back</button>
        </div>
      )}
      {view === 'caseFiles' && (
        <div id="caseFilesControls">
          <button onClick={closeApp}>Back</button>
        </div>
      )}

      {view === 'lookItem' && (
        <div id="lookControls">
          <button onClick={endLook}>Back</button>
        </div>
      )}

      {view === 'lookObject' && (
        <div id="lookControls">
          <button onClick={closeMenu}>Back</button>
        </div>
      )}

      {view === 'lookCaseFile' && (
        <div id="lookControls">
          <button onClick={closeCaseFile}>Back</button>
        </div>
      )}

      {view === 'lookBuilding' && (
        <div id="lookControls">
          <button onClick={closeMenu}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Controls;
