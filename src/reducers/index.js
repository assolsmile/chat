import {combineReducers} from 'redux';
import chat from './chat';
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  chat,
  form: formReducer
})
