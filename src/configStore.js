import { reducer } from '../db/reducer.js';
import { createStore } from 'redux';

export default function configStore(initialState) {
  return createStore(reducer, initialState);
}
