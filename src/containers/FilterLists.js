import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "./../store/actions/index";
import { withRouter } from "react-router-dom";

const filterLists = props => {
    useEffect(() => {
        console.log(props.match);
        props.onFetchListsForFilter(props.history.location.pathname);
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
const mapDispatchToProps = dispatch => {
    return {
        onFetchListsForFilter: (pathname) => dispatch(actions.fetchListsForFilter(pathname))
    }
}
export default connect(null, mapDispatchToProps)(filterLists);