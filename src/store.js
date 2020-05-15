import configStore from './configStore';

const storeConfig = {
  view: 'startMenu',
  cigCount: 20,
  ammoCount: 6,
  currentLocation: {},
  lookBuilding: {},
  lookItem: {},
  lookObject: {},
  lookCaseFile: {},
};

const arrayStoreConfig = {};

const store = configStore(storeConfig);

export default store;
