import * as actionTypes from './actionTypes';

export const getGenres = (filterType) => {
    return {
        type: actionTypes.GET_GENRES,
        filterType: filterType
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
export const removeGenre = (genre) => {
    return {
        type: actionTypes.REMOVE_GENRE,
        genre: genre
    }
}
export const addPeopleInput = (peopleInput) => {
    return {
        type: actionTypes.ADD_PEOPLE_INPUT,
        peopleInput: peopleInput
    }
}
export const removePeopleInput = (peopleInput) => {
    return {
        type: actionTypes.REMOVE_PEOPLE_INPUT,
        peopleInput: peopleInput
    }
}
export const addKeyInput = (keyInput) => {
    return {
        type: actionTypes.ADD_KEY_INPUT,
        keyInput: keyInput
    }
}
export const removeKeyInput = (keyInput) => {
    return {
        type: actionTypes.REMOVE_KEY_INPUT,
        keyInput: keyInput
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
export const increasePage = () => {
    return {
        type: actionTypes.INCREASE_PAGE
    }
}
export const decreasePage = () => {
    return {
        type: actionTypes.DECREASE_PAGE
    }
}
export const resetPageNumber = () => {
    return {
        type: actionTypes.RESET_PAGE_NUMBER
    }
}
export const addDiscoverType = (discoverType) => {
    return {
        type: actionTypes.GET_DISCOVER_TYPE,
        discoverType: discoverType
    }
}
export const checkboxChecked = (checked) => {
    return {
        type: actionTypes.CHECKBOX_CHECKED,
        checked: checked
    }
}
export const deleteFilters = () =>{
    return {
        type: actionTypes.DELETE_FILTERS
    }
}
export const deleteFiltersAddGenre = (genreName, genreId) =>{
    return {
        type: actionTypes.DELETE_FILTERS_ADD_GENRE,
        genreName: genreName,
        genreId: genreId
    }
}
export const addFilterSort = (selected) => {
    return {
        type: actionTypes.ADD_FILTER_SORT,
        selected: selected
    }
}
export const removeFilterSort = () => {
    return {
        type: actionTypes.REMOVE_FILTER_SORT
    }
}