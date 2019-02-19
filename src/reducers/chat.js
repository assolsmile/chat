import * as actionTypes from "../actions/actionTypes"

const initialState = {
  messages: [
    {
      author: "Assel",
      timestamp: 333333333333333,
      message: "Hey! How are you?"
    },
    {
      author: "Rob",
      timestamp: 333333333333333,
      message: "I am fine!"
    },
    {
      author: "Rob",
      timestamp: 333333333333333,
      message: "And you?"
    },

  ],
  currentUser: "Assel"
};

const chat = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL:
    case actionTypes.SEND_MESSAGE:
      return state;
    case actionTypes.LOAD_ALL_SUCCESS:
      return {
        ...state,
        messages: action.messages
      };
    case actionTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    default:
      console.log(action);
      return initialState;
  }
};

export default chat;
