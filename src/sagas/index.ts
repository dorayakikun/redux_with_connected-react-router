import { push } from "connected-react-router";
import { startSubmit, stopSubmit } from "redux-form";
import { all, put, takeEvery } from "redux-saga/effects";

import {
  ActionKeys,
  SubmitContactFormAction,
  setContactForm
} from "../actions/contact";

export function* handleContactForm(action: SubmitContactFormAction) {
  yield put(startSubmit("contact"));
  // Do something async processes
  yield put(stopSubmit("contact"));

  yield put(setContactForm(action.payload));

  yield put(push("/preview"));
}

export function* rootSaga() {
  yield all([takeEvery(ActionKeys.SUBMIT_CONTACT_FORM, handleContactForm)]);
}
