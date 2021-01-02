import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "./../store/actions/index";
import MoviePage from "./../components/MoviePage/MoviePage";
import Spinner from "./../components/Spinner/Spinner";
import ErrorPage from "./../components/ErrorPage/ErrorPage";

const movie = props => {
     useEffect(() => {
        props.onFetchDataForMovie(props.history.location)
    },[props.history.location]);

    useEffect(()=>{
        props.onResetPageNumber();
    },[props.history.location.pathname.split("/")[2]]);

    let lists = props.movieData[0] ? <MoviePage/> : props.error ? <ErrorPage/> :<Spinner/>
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.filterType === "movie" ? props.movieData[0].title : props.movieData[0].name}</title>
            </Helmet>
            {lists}
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        filterType: state.filter.filterType,
        movieData: state.query.movieData,
        error: state.query.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchDataForMovie: (path) => dispatch(actions.fetchDataForMovie(path)),
        onResetPageNumber: () => dispatch(actions.resetPageNumber())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(movie));