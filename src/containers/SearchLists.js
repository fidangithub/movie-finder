import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "./../store/actions/index";
import { withRouter } from "react-router-dom";

const searchLists = props => {
    useEffect(() => {
        props.onFetchListsForSearch(props.searchInput);
    });
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
            </Helmet>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        searchInput: state.filter.searchInput
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchListsForSearch: (search) => dispatch(actions.fetchListsForSearch(search))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchLists));