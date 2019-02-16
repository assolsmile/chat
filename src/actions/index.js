import * as actionTypes from "./actionTypes";

export const sendMessage = (author, message) => ({
  type: actionTypes.SEND_MESSAGE,
  author,
  message
});
