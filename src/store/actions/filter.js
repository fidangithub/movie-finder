import * as actionTypes from './actionTypes';

export const getGenres = () => {
    return {
        type: actionTypes.GET_GENRES
    }
}
export const getGenresSuccess = (genres) => {
    return {
        type: actionTypes.GET_GENRES_SUCCESS,
        genres: genres
    }
}
export const addGenre = (genreName, genreId) => {
    return {
        type: actionTypes.ADD_GENRE,
        genreName: genreName,
        genreId: genreId
    }
}
export const removeGenre = (genreName) => {
    return {
        type: actionTypes.REMOVE_GENRE,
        genreName: genreName
    }
}
export const addPeopleInput = (inputValue) => {
    return {
        type: actionTypes.ADD_PEOPLE_INPUT,
        inputValue: inputValue
    }
}
export const removePeopleInput = (inputValue) => {
    return {
        type: actionTypes.REMOVE_PEOPLE_INPUT,
        inputValue: inputValue
    }
}
export const addKeyInput = (inputValue) => {
    return {
        type: actionTypes.ADD_KEY_INPUT,
        inputValue: inputValue
    }
}
export const removeKeyInput = (inputValue) => {
    return {
        type: actionTypes.REMOVE_KEY_INPUT,
        inputValue: inputValue
    }
}
export const addImdb = (minVal, maxVal) => {
    return {
        type: actionTypes.ADD_IMDB,
        minVal: minVal,
        maxVal: maxVal
    }
}
export const removeImdb = () => {
    return {
        type: actionTypes.REMOVE_IMDB
    }
}
export const addHistory = (select, selectedYear) => {
    return {
        type: actionTypes.ADD_HISTORY,
        select: select,
        selectedYear: selectedYear
    }
}
export const removeHistory = () => {
    return {
        type: actionTypes.REMOVE_HISTORY
    }
}
export const onInputValueAdd = (val) => {
    return {
        type: actionTypes.ADD_INPUT_VALUE,
        val: val
    }
}