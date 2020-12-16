import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
    fetchedGenres: [],
    genres: [],
    people: [],
    keys: [],
    imdb: [],
    year: [],
    searchInput: "",
    page: 1,
    discoverType: "",
}
const getGenres = (state, action) => {
    return updatedObject(state, {
        fetchedGenres: action.genres
    })
}
const addGenre = (state, action) => {
    const newGenre = { name: action.genreName, id: action.genreId };
    return updatedObject(state, {
        genres: state.genres.concat(newGenre)
    });
}
const removeGenre = (state, action) => {
    return updatedObject(state, {
        genres: state.genres.filter(genre => genre.id !== action.genre.id)
    });
}
const addPeopleInput = (state, action) => {
    let statePeople = state.people;
    return updatedObject(state, {
        people: statePeople.concat(action.peopleInput)
    });
}
const removePeopleInput = (state, action) => {
    let statePeople = state.people;
    return updatedObject(state, {
        people: statePeople.filter(people => people !== action.peopleInput)
    });
}
const addKeyInput = (state, action) => {
    let stateKeys = state.keys;
    return updatedObject(state, {
        keys: stateKeys.concat(action.keyInput)
    });
}
const removeKeyInput = (state, action) => {
    let stateKeys = state.keys;
    return updatedObject(state, {
        keys: stateKeys.filter(key => key !== action.keyInput)
    });
}
const addImdb = (state, action) => {
    return updatedObject(state, {
        imdb: [action.minVal, action.maxVal]
    });
}
const removeImdb = (state, action) => {
    return updatedObject(state, {
        imdb: []
    });
}
const addHistory = (state, action) => {
    return updatedObject(state, {
        year: [action.select, action.selectedYear]
    });
}
const removeHistory = (state, action) => {
    return updatedObject(state, {
        year: []
    });
}
const addInputValue = (state, action) => {
    return updatedObject(state, {
        searchInput: action.val
    })
}
const increasePage = (state, action) => {
    let oldPage = state.page;
    return updatedObject(state, {
        page: oldPage+1
    })
}
const decreasePage = (state, action) => {
    let oldPage = state.page;
    return updatedObject(state, {
        page: oldPage-1
    })
}
const resetPageNumber = (state, action) => {
    return updatedObject(state, {
        page: 1
    });
}
const getDiscoverType = (state, action) => {
    return updatedObject(state, {
        discoverType: action.discoverType
    });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_GENRES_SUCCESS:
            return getGenres(state, action);
        case actionTypes.ADD_GENRE:
            return addGenre(state, action);
        case actionTypes.REMOVE_GENRE:
            return removeGenre(state, action);
        case actionTypes.ADD_PEOPLE_INPUT:
            return addPeopleInput(state, action);
        case actionTypes.REMOVE_PEOPLE_INPUT:
            return removePeopleInput(state, action);
        case actionTypes.ADD_KEY_INPUT:
            return addKeyInput(state, action);
        case actionTypes.REMOVE_KEY_INPUT:
            return removeKeyInput(state, action);
        case actionTypes.ADD_IMDB:
            return addImdb(state, action);
        case actionTypes.REMOVE_IMDB:
            return removeImdb(state, action);
        case actionTypes.ADD_HISTORY:
            return addHistory(state, action);
        case actionTypes.REMOVE_HISTORY:
            return removeHistory(state, action);
        case actionTypes.ADD_INPUT_VALUE:
            return addInputValue(state, action);
        case actionTypes.INCREASE_PAGE:
            return increasePage(state, action);
        case actionTypes.DECREASE_PAGE:
            return decreasePage(state, action);
        case actionTypes.RESET_PAGE_NUMBER:
            return resetPageNumber(state, action);
        case actionTypes.GET_DISCOVER_TYPE:
            return getDiscoverType(state, action);
        default:
            return state;
    }
}
export default reducer;