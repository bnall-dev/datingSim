import React from 'react';

const Controls = ({
  view,
  setView,
  locations,
  currentLocation,
  setCurrentLocation,
}) => {
  const startNewGame = () => {
    setView('cutScene');
    setView('gameplay');
  };
  const openGameMenu = () => {
    setView('gameMenu');
  };
  const openInventory = () => {
    setView('inventory');
  };
  const closeMenu = () => {
    setView('gameplay');
  };
  const moveEast = () => {
    setCurrentLocation(locations[currentLocation.east]);
  };
  const moveWest = () => {
    setCurrentLocation(locations[currentLocation.west]);
  };

  const endLook = () => {
    setView('inventory');
  };
  const closeApp = () => {
    setView('phone');
  };

  const openPhoneMenu = () => {
    setView('phone');
  };

  const saveGame = () => {
    localStorage.clear();

    localStorage.setItem('currentLocation', currentLocation.name);
    setView('gameplay');
  };
  const continueGame = () => {
    const locationsArray = Object.values(locations);
    const savedLocation = locationsArray.find((location) => {
      return location.name === localStorage.getItem('currentLocation');
    });
    setCurrentLocation(savedLocation);
    setView('gameplay');
  };
  const quitGame = () => {
    setCurrentLocation(locations.outskirts);
    setView('startMenu');
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
            {currentLocation.north && <button>Go North</button>}
            {!currentLocation.north && <button disabled>Go North</button>}
            {currentLocation.south && <button>Go South</button>}
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
          <button onClick={closeMenu}>Cancel</button>
        </div>
      )}

      {view === 'phone' && (
        <div id="phoneControls">
          <button onClick={closeMenu}>Cancel</button>
        </div>
      )}
      {view === 'contacts' && (
        <div id="contactsControls">
          <button onClick={closeApp}>Cancel</button>
        </div>
      )}
      {view === 'caseFiles' && (
        <div id="caseFilesControls">
          <button onClick={closeApp}>Cancel</button>
        </div>
      )}

      {view === 'lookItem' && (
        <div id="lookControls">
          <button onClick={endLook}>Cancel</button>
        </div>
      )}

      {view === 'lookObject' && (
        <div id="lookControls">
          <button onClick={closeMenu}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Controls;
