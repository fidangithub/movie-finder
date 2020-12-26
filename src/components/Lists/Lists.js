import React from "react";
import classes from "./Lists.css";
import List from "./List/List"
import { connect } from "react-redux";
import PrevNextButtons from "../PrevNextButtons/PrevNextButtons";
import NoResults from "./../NoResults/NoResults";

const lists = props => {
    let lists = props.data[0].map((data) => {
        return (<List title={props.data[1]==="movie" ? data.title : data.name} overview={data.overview} 
            url={props.url} id={data.id} poster={data.poster_path} imdb={data.vote_average}
            filterType={props.data[1]} key={data.id}/>);
    });
    return (
        <React.Fragment>
            {lists.length !== 0 
            ? <div className={classes.Lists}>{lists}</div> 
            : <NoResults/> }
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
