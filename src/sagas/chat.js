import {call, put, takeEvery} from "redux-saga/effects";
import * as api from "../lib/api";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionTypes";

export function* loadAll() {
  try {
    const {data} = yield call(api.loadAll);
    yield put(
      actions.loadAllSuccess(data)
    );
  } catch (error) {
    yield  actions.loadAllError(error)
  }
}

export function* sendMessage(action) {
  try {
    const response = yield call(api.sendMessage(action));

    yield put(
      actions.sendMessageSuccess(response.data)
    );
  } catch (error) {
    yield actions.sendMessageError(error)

  }
}

export default function* sagas() {
  yield takeEvery(actionTypes.LOAD_ALL, loadAll);
  yield takeEvery(actionTypes.SEND_MESSAGE, sendMessage);
}
