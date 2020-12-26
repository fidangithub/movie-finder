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
        props.history.push(process.env.PUBLIC_URL + `/search/${props.filterType}/${value}`)
        setValue("");
    }
    let placeholder = props.filterType==="movie" ? "movie" : "tv shows";
    return (
        <form action="#" className={classes.Search} onSubmit={onSubmitHandler}>
            <input type="text" className={classes.SearchInput} onChange={onChangeHandler} value={value}
            placeholder={`Search for ` + placeholder + `...`} />
            <button className={classes.SearchButton}>
                <FontAwesomeIcon icon={["fas", "search"]} className={classes.SearchIcon} />
            </button>
        </form>
    );
}
const mapStateToProps = state => {
    return {
        filterType: state.filter.filterType
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onInputValueAdd: (val) => dispatch(actions.onInputValueAdd(val))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(search));