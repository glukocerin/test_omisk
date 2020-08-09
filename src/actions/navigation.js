const SET_LANDING_INDEX = "SET_LANDING_INDEX";

export function updatePageindex({ payload }) {
  return dispatch => {
    return dispatch({
      type: SET_LANDING_INDEX,
      payload
    });
  };
}
