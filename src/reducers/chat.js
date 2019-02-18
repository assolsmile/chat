import * as actionTypes from "../actions/actionTypes"

const initialState = {
  messages: [
    {
      author: "Assel",
      timestamp: 333333333333333,
      message: "SThanks"
    },
    {
      author: "Rob",
      timestamp: 333333333333333,
      message: "SThanks"
    },
    {
      author: "Rob",
      timestamp: 333333333333333,
      message: "SThanks"
    },

  ],
  currentUser: "Assel"
};

const chat = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_SUCCESS:
      return {
        ...state,
        messages: action.messages
      };
    default:
      return initialState;
  }
};

export default chat;
