import * as actionTypes from "./../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
    listsData: [false, false],
    base_url_images: "https://image.tmdb.org/t/p/",
    totalPages: null,
    movieData: [false, false], 
    castData: [],
    languageData: [],
    similarData: [false, false],
    error: null
}
const listsData = (state, action) => {
    return updatedObject(state, {
        listsData: [action.data, action.filterType],
        error: false
    });
}
//we call deleteData when fetching start, and we want set error to false wwhen fetch start
const deleteData = (state, action) => {
    return updatedObject(state, {
        listsData: [false, false],
        movieData: [false, false],
        similarData:[false, false],
        error: false
    });
}
const getTotalPages = (state, action) => {
    return updatedObject(state, {
        totalPages: action.totalPages
    });
}
const movieData = (state, action) => {
    return updatedObject(state, {
        movieData: [action.data, action.filterType]
    });
}
const castData = (state, action) => {
    return updatedObject(state, {
        castData: action.data
    });
}
const languageData = (state, action) => {
    return updatedObject(state, {
        languageData: action.data
    });
}
const similarData = (state, action) => {
    return updatedObject(state, {
        similarData: [action.data, action.filterType]
    });
}
const fetchingFailed = (state, aciton) => {
    return updatedObject(state, {
        error: true
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LISTS_DATA:
            return listsData(state, action);
        case actionTypes.DELETE_DATA:
            return deleteData(state, action);
        case actionTypes.GET_TOTAL_PAGES:
            return getTotalPages(state, action);
        case actionTypes.MOVIE_DATA:
            return movieData(state, action);
        case actionTypes.CAST_DATA:
            return castData(state, action);
        case actionTypes.LANGUAGE_DATA:
            return languageData(state, action);
        case actionTypes.SIMILAR_DATA:
            return similarData(state, action);
        case actionTypes.FETCH_FAILED:
            return fetchingFailed(state, action);
        default:
            return state;
    }
}
export default reducer;