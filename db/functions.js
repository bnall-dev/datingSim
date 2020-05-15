import React from 'react';
import store from '../src/store.js';
import objects from './objects';
import buildings from './buildings';
import caseFiles from './caseFiles';
import cutscenes from './cutscenes';

import {
  changeLookObject,
  changeLookItem,
  changeLookBuilding,
  changeView,
  changeCurrentScene,
  changeLookCaseFile,
} from './actions.js';

export const examineObject = (e) => {
  const objectsArray = Object.values(objects);
  const object = objectsArray.find(
    (object) => object.dialogueName === e.target.innerText
  );
  store.dispatch(changeLookObject(object));
  store.dispatch(changeView('lookObject'));
};

export const examineItem = (item) => {
  store.dispatch(changeLookItem(item));

  store.dispatch(changeView('lookItem'));
};

export const examineBuilding = (e) => {
  const buildingsArray = Object.values(buildings);
  const building = buildingsArray.find(
    (building) => building.name === e.target.innerText
  );
  store.dispatch(changeLookBuilding(building));
  store.dispatch(changeView('lookBuilding'));
};

export const examineCaseFile = (e) => {
  const caseFile = caseFiles.find(
    (caseFile) => caseFile.title === e.target.innerText
  );
  store.dispatch(changeLookCaseFile(caseFile));
  store.dispatch(changeView('lookCaseFile'));
};
