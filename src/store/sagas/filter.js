import axios from "./../../axios-movie";
import { put } from "redux-saga/effects";
import * as actions from "./../actions/index";

export function* getGenres(action) {
    try {
        const response = yield axios.get(`genre/${action.filterType}/list`);
        yield put(
            actions.getGenresSuccess(response.data.genres)
        )
    } catch (error) {
    }
}