let defaultData = {
  index: 0
};

export default function reducer(state = defaultData, action) {
  switch (action.type) {
    case "SET_INDEX":
      return {
        ...state,
        index: action.payload
      };
    default:
      return { ...state };
  }
}
