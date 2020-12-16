import React, { useEffect } from "react";
import classes from "./Lists.css";
import List from "./List/List"
import { connect } from "react-redux";
import PrevNextButtons from "../PrevNextButtons/PrevNextButtons";

const lists = props => {
    let lists = props.data.map((data) => {
        return (<List title={data.title} overview={data.overview} url={props.url} id={data.id}
            poster={data.poster_path} imdb={data.vote_average}/>);
    });
    return (
        <React.Fragment>
            <div className={classes.Lists}>
                {lists}
            </div>
            <PrevNextButtons/>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        url: state.query.base_url_images
    }
}

export default connect(mapStateToProps)(lists);
