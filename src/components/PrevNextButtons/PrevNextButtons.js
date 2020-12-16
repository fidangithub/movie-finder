import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./PrevNextButtons.css";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";

const prevNextButtons = props => {
    console.log(props.page, props.page !== 1);
   
    const prevButtonHandler = () => {
        props.onPageDecreased();
    }
    const nextButtonHandler = () => {
        props.onPageIncreased();
    }
    
    let prevBtn, nextBtn, btnStyle;

    if(props.totalPages === 1 || props.totalPages === 0){
        return null;
    }
    if (props.page < props.totalPages && props.page === 1) {
        btnStyle = classes.Next;
        prevBtn = null;
        nextBtn = (   
            <div className={classes.PrevNextButton} onClick={nextButtonHandler}>
                <p className={classes.PrevNextPageText}>Page {props.page + 1}</p>
                <FontAwesomeIcon icon={["fas", "chevron-right"]}
                    className={[classes.PrevNextIcon, classes.NextButton].join(" ")} />
            </div>
        );
    }else if (props.page < props.totalPages){
        btnStyle = classes.Both;
        prevBtn = (
            <div className={classes.PrevNextButton} onClick={prevButtonHandler}>
                <FontAwesomeIcon icon={["fas", "chevron-left"]}
                    className={[classes.PrevNextIcon, classes.PrevButton].join(" ")} />
                <p className={classes.PrevNextPageText}>Page {props.page - 1}</p>
            </div>
        );
        nextBtn = (   
            <div className={classes.PrevNextButton} onClick={nextButtonHandler}>
                <p className={classes.PrevNextPageText}>Page {props.page + 1}</p>
                <FontAwesomeIcon icon={["fas", "chevron-right"]}
                    className={[classes.PrevNextIcon, classes.NextButton].join(" ")} />
            </div>
        );
    }else{
        btnStyle = classes.Prev;
        prevBtn = (
            <div className={classes.PrevNextButton} onClick={prevButtonHandler}>
                <FontAwesomeIcon icon={["fas", "chevron-left"]}
                    className={[classes.PrevNextIcon, classes.PrevButton].join(" ")} />
                <p className={classes.PrevNextPageText}>Page {props.page - 1}</p>
            </div>
        );
    }

    return (
        <div className={[classes.PrevNextButtons, btnStyle].join(" ")}>
            {prevBtn}
            {nextBtn}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        page: state.filter.page,
        totalPages: state.query.totalPages
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPageIncreased: () => dispatch(actions.increasePage()),
        onPageDecreased: () => dispatch(actions.decreasePage()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(prevNextButtons));