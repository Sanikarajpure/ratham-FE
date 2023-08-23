import { SET_USERNAME, SET_USERAGE } from "./types";

export const set_username = (name) => ({
  type: SET_USERNAME,
  payload: name,
});

export const set_userage = (age) => ({
  type: SET_USERAGE,
  payload: age,
});
