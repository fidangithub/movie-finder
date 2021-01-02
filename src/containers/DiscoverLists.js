import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "./../store/actions/index";
import { withRouter } from "react-router-dom";
import Lists from "./../components/Lists/Lists";
import Spinner from "./../components/Spinner/Spinner";
import ErrorPage from "./../components/ErrorPage/ErrorPage";
const discoverLists = props => {
    useEffect(() => {
        props.onFetchListsForDiscover(props.history.location);
    }, [props.history.location]);
    
    let lists = props.data[0] ? <Lists data={props.data}/> : props.error ? <ErrorPage/> :<Spinner/>
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.filterType === "movie" ? "Movies" : "TV Shows"}</title>
            </Helmet>
            {lists}
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        filterType: state.filter.filterType,
        data: state.query.listsData,
        error: state.query.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchListsForDiscover: (discoverType) => dispatch(actions.fetchListsForDiscover(discoverType))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(discoverLists));