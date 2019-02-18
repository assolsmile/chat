import { all } from 'redux-saga/effects'
import chat from 'sagas/chat';

export default function* sagas() {
  yield all ([
    chat()
  ]);
}
