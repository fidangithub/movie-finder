import React, {useState} from "react";
import classes from "./Search.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "./../../store/actions/index";

const search = (props) => {
    const [value, setValue] = useState("");

    const onChangeHandler = (event) =>{
        event.preventDefault();
        setValue(event.target.value)
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        props.onInputValueAdd(value);
        props.history.push(`/search/${value}`)
        setValue("");
    }
    return (
        <form action="#" className={classes.Search} onSubmit={onSubmitHandler}>
            <input type="text" className={classes.SearchInput} onChange={onChangeHandler} value={value}
            placeholder="Search for movie..." />
            <button className={classes.SearchButton}>
                <FontAwesomeIcon icon={["fas", "search"]} className={classes.SearchIcon} />
            </button>
        </form>
    );
}
const mapDispatchToProps = dispatch => {
    return {
      onInputValueAdd: (val) => dispatch(actions.onInputValueAdd(val))
    }
}
export default withRouter(connect(null, mapDispatchToProps)(search));