import axios from "./../../axios-movie";
import { put } from "redux-saga/effects";
import * as actions from "./../actions/index";

export function* getGenres() {
    try {
        const response = yield axios.get("genre/movie/list");
        yield put(
            actions.getGenresSuccess(response.data.genres)
        )
        // console.log(response.data.genres);
    } catch (error) {
        console.log("EROOR OCCURED!")
    }
}