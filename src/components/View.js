import React from 'react';

const View = ({
  view,
  lookItem,
  lookObject,
  currentLocation,
  lookCaseFile,
  lookBuilding,
}) => {
  const menuViewStyle = { filter: 'brightness(0.4)' };
  return (
    <div id="view">
      {view === 'startMenu' && <h1 id="title">シリアルガールズ</h1>}
      {view === 'startMenu' && (
        <img className="viewImage" src="../assets/images/startmenu.png" />
      )}
      {view === 'gameplay' && (
        <img className="viewImage" src={currentLocation.image} />
      )}
      {view === 'gameMenu' && (
        <img
          className="viewImage"
          style={menuViewStyle}
          src={currentLocation.image}
        />
      )}
      {view === 'inventory' && (
        <img className="viewImage" src="../assets/images/briefcase.png" />
      )}
      {view === 'phone' && (
        <img className="viewImage" src="../assets/images/phone.jpg" />
      )}
      {view === 'caseFiles' && (
        <img className="viewImage" src="../assets/images/caseFiles.jpg" />
      )}
      {view === 'lookItem' && (
        <img className="viewImage" src={lookItem.image} />
      )}
      {view === 'lookObject' && (
        <img className="viewImage" src={lookObject.image} />
      )}
      {view === 'lookCaseFile' && (
        <img className="viewImage" src={lookCaseFile.image} />
      )}
      {view === 'lookBuilding' && (
        <img className="viewImage" src={lookBuilding.image} />
      )}
    </div>
  );
};

export default View;
