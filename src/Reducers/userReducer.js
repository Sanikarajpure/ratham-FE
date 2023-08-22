import { SET_USER } from "../Actions/types";
let userDefault = {
  firstname: null,
  lastname: null,
  age: null,
};
const userReducer = (state = userDefault, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
