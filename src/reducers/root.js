import { combineReducers } from "redux";

import navigation from "./navigation";

let appReducer = combineReducers({
  navigation
});

const rootReducer = (state, action) => {
  if (action.type === "EXIT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
