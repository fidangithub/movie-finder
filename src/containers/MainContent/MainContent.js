import React from "react";
import classes from "./MainContent.css";
import Spinner from "./../../components/Spinner/Spinner"

import Search from "./../../components/Search/Search";
import RightFilters from "./../../components/RightFilters/RightFilters";
import Lists from "./../../components/Lists/Lists";
import MoviePage from "./../../components/MoviePage/MoviePage";
import { connect } from "react-redux"

const mainContent = props => {
    let a = props.movieData ? "true" : "false";
    console.log(props.movieData, a);
    let mainScreen = <Spinner />;
    if (props.data) {
        mainScreen = (<Lists data={props.data}/>);
    }else if (props.movieData) {
        mainScreen = (<MoviePage />);
    }
    return (
        <div className={[classes.MainContent, props.position ? "" : classes.Open].join(" ")}  >
            <Search />
            <RightFilters />
            {mainScreen}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        data: state.query.listsData,
        position: state.ui.position,
        movieData: state.query.movieData
    }
}

export default connect(mapStateToProps)(mainContent);

