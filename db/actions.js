import React from 'react';

export const smokeCig = () => {
  return { type: 'SMOKE_CIG' };
};
export const changeView = (view) => {
  return { type: 'CHANGE_VIEW', view };
};

export const changeCurrentLocation = (location) => {
  return { type: 'CHANGE_CURRENTLOCATION', location };
};

export const changeLookItem = (item) => {
  return { type: 'CHANGE_LOOKITEM', item };
};

export const changeLookObject = (object) => {
  return { type: 'CHANGE_LOOKOBJECT', object };
};

export const changeLookBuilding = (building) => {
  return { type: 'CHANGE_LOOKBUILDING', building };
};

export const changeLookCaseFile = (caseFile) => {
  return { type: 'CHANGE_LOOKCASEFILE', caseFile };
};

export const changeCutscene = (scene) => {
  return { type: 'CHANGE_CUTSCENE', scene };
};

export const changeSceneText = (text) => {
  return { type: 'CHANGE_SCENETEXT', text };
};
