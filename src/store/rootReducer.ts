import { combineReducers } from '@reduxjs/toolkit';
import nodesReducer from './slices/Nodes';

const rootReducer = combineReducers({
  nodes: nodesReducer,
});

export default rootReducer;
