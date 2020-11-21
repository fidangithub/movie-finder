import React, { useEffect } from "react";
import classes from "./Lists.css";
import List from "./List/List"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/actionTypes";

const lists = props => {
    let lists = props.data.map((data) => {
        return (<List title={data.title} overview={data.overview} url={props.url} poster={data.poster_path} />);
    });
    return (
        <div className={classes.Lists}>
            {lists}
            <div className={classes.PrevNextButtons}>
                <div className={classes.PrevNextButton}>
                    <FontAwesomeIcon icon={["fas", "chevron-left"]}
                        className={[classes.PrevNextIcon, classes.PrevButton].join(" ")} />
                    <p className={classes.PrevNextPageText}>Page 1</p>
                </div>
                <div className={classes.PrevNextButton}>
                    <p className={classes.PrevNextPageText}>Page 2</p>
                    <FontAwesomeIcon icon={["fas", "chevron-right"]}
                        className={[classes.PrevNextIcon, classes.NextButton].join(" ")} />
                </div>
            </div >
        </div >
    )
}
const mapStateToProps = state => {
    return {
        data: state.query.listsData,
        url: state.query.base_url_images
    }
}

export default connect(mapStateToProps)(lists);
