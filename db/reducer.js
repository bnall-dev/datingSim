import React from 'react';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SMOKE_CIG':
      return {
        ...state,
        cigCount: state.cigCount - 1,
      };
    case 'CHANGE_VIEW':
      return {
        ...state,
        view: action.view,
      };

    case 'CHANGE_CURRENTLOCATION':
      return {
        ...state,
        currentLocation: action.location,
      };
    case 'CHANGE_LOOKITEM':
      return {
        ...state,
        lookItem: action.item,
      };
    case 'CHANGE_LOOKOBJECT':
      return {
        ...state,
        lookObject: action.object,
      };
    case 'CHANGE_LOOKBUILDING':
      return {
        ...state,
        lookBuilding: action.building,
      };
    case 'CHANGE_LOOKCASEFILE':
      return {
        ...state,
        lookCaseFile: action.caseFile,
      };
    case 'CHANGE_CUTSCENE':
      return {
        ...state,
        currentScene: action.scene,
      };
    case 'CHANGE_SCENETEXT':
      return {
        ...state,
        sceneText: action.text,
      };

    default:
      return state;
  }
};
