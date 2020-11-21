import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { fetchListsForDiscover, fetchListsForFilter } from "./query";
import { getGenres } from "./filter";

export function* watchDiscover() {
    yield takeEvery(actionTypes.GET_GENRES, getGenres);
    yield takeEvery(actionTypes.FETCH_LISTS_FOR_DISCOVER, fetchListsForDiscover);
    yield takeEvery(actionTypes.FETCH_LISTS_FOR_FILTER, fetchListsForFilter);
}