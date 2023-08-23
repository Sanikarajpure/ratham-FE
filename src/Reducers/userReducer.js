import { SET_USERNAME, SET_USERAGE } from "../Actions/types";
let userDefault = {
  name: null,
  age: null,
};
const userReducer = (state = userDefault, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_USERAGE:
      return {
        ...state,
        age: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
