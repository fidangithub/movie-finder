import * as actionTypes from './actionTypes';

export const queryChanged = (queryName) => {
    return {
        type: actionTypes.FIND_MOVIES,
        queryName: queryName
    }
}
export const listsData = (data) => {
    return {
        type: actionTypes.LISTS_DATA,
        data: data
    }
}
export const deleteData = () => {
    return {
        type: actionTypes.DELETE_DATA
    }
}
export const fetchListsForDiscover = (discoverType) => {
    return {
        type: actionTypes.FETCH_LISTS_FOR_DISCOVER,
        discoverType: discoverType
    }
}
export const fetchListsForFilter = (pathname) => {
    return {
        type: actionTypes.FETCH_LISTS_FOR_FILTER,
        pathname: pathname
    }
}