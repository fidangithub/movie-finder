import * as actionTypes from "./../actions/actionTypes";
import { updatedObject } from "../../shared/utility";


const initialState = {
    listsData: false,
    base_url_images: "https://image.tmdb.org/t/p/"
}
const addData = (state, action) => {
    return updatedObject(state, {
        listsData: action.data
    });
}
const deleteData = (state, action) => {
    return updatedObject(state, {
        listsData: false
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LISTS_DATA:
            return addData(state, action);
        case actionTypes.DELETE_DATA:
            return deleteData(state, action);
        default:
            return state;
    }
}
export default reducer;