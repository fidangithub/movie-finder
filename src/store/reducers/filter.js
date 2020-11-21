import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility"
import { addMinRange } from "../actions/filter";

const initialState = {
    fetchedGenres: [],
    genres: [],
    peoples: [],
    keys: [],
    imdb: [],
    year: [],
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
        genres: state.genres.filter(genre => genre !== action.genreName)
    });
}
const addPeopleInput = (state, action) => {
    return updatedObject(state, {
        peoples: state.peoples.concat(action.inputValue)
    });
}
const removePeopleInput = (state, action) => {
    return updatedObject(state, {
        peoples: state.peoples.filter(people => people !== action.inputValue)
    });
}
const addKeyInput = (state, action) => {
    return updatedObject(state, {
        keys: state.keys.concat(action.inputValue)
    });
}
const removeKeyInput = (state, action) => {
    return updatedObject(state, {
        keys: state.keys.filter(key => key !== action.inputValue)
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
        year: [action.minVal, action.maxVal]
    });
}
const removeHistory = (state, action) => {
    return updatedObject(state, {
        year: []
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
        default:
            return state;
    }
}
export default reducer;