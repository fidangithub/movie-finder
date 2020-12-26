import React, {useState, useEffect} from "react";
import classes from "./MovieTv.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "./../../store/actions/index";

const movieTv = props => {
    const [checkbox, setCheckbox] = useState(true);
    const handleCheck = () => {
        let oldCheck =  checkbox;
        let newCheck = !oldCheck;
        setCheckbox(newCheck);
        props.onDeleteAllFilters();
    }
    useEffect(()=>{
        props.onCheckboxChecked(checkbox);
    }, [checkbox]);
    
    let redirect = checkbox 
        ? (<Redirect to="/discover/movie/Popular"/>) 
        : (<Redirect to="/discover/tv/Popular"/>);
    return (
        <div className={classes.SwitchButton}>
            {redirect}
            <input className={classes.MTInput} type="checkbox" name="input-switch" id="input-switch" 
            onChange={handleCheck}/>
            <label className={classes.MTLabel} htmlFor="input-switch"></label>
            <div className={classes.Movie}>Movie</div>
            <div className={classes.Tv}>TV</div>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        onCheckboxChecked: (checked) => dispatch(actions.checkboxChecked(checked)),
        onDeleteAllFilters: () => dispatch(actions.deleteFilters())
    }
}
export default connect(null, mapDispatchToProps)(movieTv);