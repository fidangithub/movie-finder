import * as actionTypes from "./../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
    position: true
}
const buttonClicked = (state, action) => {
    let oldOne = state.position;
    let newOne = !oldOne;
    return updatedObject(state, {
        position: newOne
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUTTON_CLICKED:
            return buttonClicked(state, action);
        default:
            return state;
    }
}
export default reducer;