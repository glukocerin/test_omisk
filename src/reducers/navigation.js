let defaultData = {
  index: 0,
  landingPageIndex: 0
};

export default function reducer(state = defaultData, action) {
  switch (action.type) {
    case "SET_INDEX":
      return {
        ...state,
        index: action.payload
      };
    case "SET_LANDING_INDEX":
      return {
        ...state,
        landingPageIndex: action.payload
      };
    default:
      return { ...state };
  }
}
