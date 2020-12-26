import React, { useRef, useState, useEffect } from "react";
import classes from "./InputSec.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import * as actions from "../../../../store/actions/filter";

const inputSection = (props) => {
    const [active, setActive] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    useEffect(() => {
        inputValue.trim().length !== 0 ? setActiveButton(true) : setActiveButton(false);
    });
    const addValueToRedux = () => {
        if (props.type === "key")
            props.onInputKeyAdded(inputValue.trim());
        else {
            props.onInputPeopleAdded(inputValue.trim());
        }
        setInputValue("");
    }
    const keyDownHandler = (event) => {
        if (event.key === 'Enter' && inputValue.trim().length !== 0) {
            addValueToRedux();
        }
    }
    const buttonClickHandler = () => {
        if (inputValue.trim().length !== 0) {
            addValueToRedux();
        }
    }
    const focusHandler = () => {
        setActive(true);
        setActiveButton(true);
    };
    const blurHandler = () => {
        setActiveButton(false);
        setActive(false);
    }

    let attachedClasses = [classes.InputSection];
    let iconClasses = [classes.PlusIcon];

    if (active) {
        attachedClasses = [classes.InputSection, classes.Active];
    }
    if (activeButton) {
        iconClasses = [classes.PlusIcon, classes.ActiveIcon];
    }

    return (
        <div className={attachedClasses.join(" ")} ref={inputRef}>
            <div className={classes.InputCaption}>
                <FontAwesomeIcon icon={["fas", `${props.iconName}`]} className={classes.UserPlusIcon} />
                <input type="text"
                    placeholder={`Add ${props.input}`}
                    className={classes.Input}
                    value={inputValue}
                    onChange={inputChangeHandler}
                    onKeyDown={keyDownHandler}
                    // onInput={inputHandler}
                    onFocus={focusHandler}
                    onBlur={blurHandler} />

            </div>
            <FontAwesomeIcon icon={["fas", "plus"]}
                className={iconClasses.join(" ")}
                onClick={buttonClickHandler} />
        </div >
    );
}
const mapStateToProps = state => {
    return {
        genres: state.filter.genres,
        keys: state.filter.keys,
        peoples: state.filter.peoples
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInputKeyAdded: val => dispatch(actions.addKeyInput(val)),
        onInputPeopleAdded: val => dispatch(actions.addPeopleInput(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(inputSection);