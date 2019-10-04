import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// Suggested pattern by creator of redux, this action is used
// everywhere so _SUCCESS lets us handle it here instead of 
// defining a success action for each API call and dispatching it
// from the associated reducers
function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
