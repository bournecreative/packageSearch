import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  packages: reducer,
});

export default reducers;
