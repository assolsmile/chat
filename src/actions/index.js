import * as actionTypes from "./actionTypes";

export const loadAll = () => ({
  type: actionTypes.LOAD_ALL,
});

export const loadAllSuccess = (messages) => ({
  type: actionTypes.LOAD_ALL_SUCCESS,
  messages
});

export const loadAllError = (error) => ({
  type: actionTypes.LOAD_ALL_ERROR,
  error
});

export const sendMessage = (author, message) => ({
  type: actionTypes.SEND_MESSAGE,
  author,
  message
});

