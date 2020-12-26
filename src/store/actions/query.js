import * as actionTypes from './actionTypes';

export const queryChanged = (queryName) => {
    return {
        type: actionTypes.FIND_MOVIES,
        queryName: queryName
    }
}
export const listsData = (data, filterType) => {
    return {
        type: actionTypes.LISTS_DATA,
        data: data,
        filterType: filterType
    }
}
export const deleteData = () => {
    return {
        type: actionTypes.DELETE_DATA
    }
}
export const fetchListsForDiscover = (discoverPath) => {
    return {
        type: actionTypes.FETCH_LISTS_FOR_DISCOVER,
        discoverPath: discoverPath
    }
}
export const fetchListsForFilter = (search) => {
    return {
        type: actionTypes.FETCH_LISTS_FOR_FILTER,
        search: search
    }
}
export const fetchListsForSearch = (path) => {
    return {
        type: actionTypes.FETCH_LISTS_FOR_SEARCH,
        path: path
    }
}
export const totalPagesData = (totalPages) => {
    return {
        type: actionTypes.GET_TOTAL_PAGES,
        totalPages: totalPages
    }
}
export const fetchDataForMovie = (path) => {
    return {
        type: actionTypes.FETCH_DATA_FOR_MOVIE,
        path: path
    }
}
export const movieData = (data, filterType) => {
    return {
        type: actionTypes.MOVIE_DATA,
        data: data,
        filterType: filterType
    }
}
export const castData = (data) => {
    return {
        type: actionTypes.CAST_DATA,
        data: data
    }
}
export const languageData = (data) => {
    return {
        type: actionTypes.LANGUAGE_DATA,
        data: data
    }
}
export const similarData = (data, filterType) => {
    return {
        type: actionTypes.SIMILAR_DATA,
        data: data,
        filterType: filterType
    }
}
export const fetchingFail = () => {
    return {
        type: actionTypes.FETCH_FAILED
    }
}