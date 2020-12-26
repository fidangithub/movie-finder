import React from "react";
import classes from "./MenuButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";

const menuButton = props => {
    const buttonClickHandler = () =>{
        props.onButtonClickHandler();
    }
    return (
        <button className={classes.Menu} onClick={buttonClickHandler}>
            <FontAwesomeIcon icon={["fas", "bars"]} className={classes.MenuIcon} />
        </button>
    );
}
const mapStateToProps = state => {
    return {
        position: state.ui.position
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onButtonClickHandler: () => dispatch(actions.buttonClicked()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(menuButton);