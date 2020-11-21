import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "./../store/actions/index";
import { withRouter } from "react-router-dom";

const discoverLists = props => {
    useEffect(() => {
        props.onFetchListsForDiscover(props.history.location.pathname);
    });
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>"Movies"</title>
            </Helmet>
        </React.Fragment>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchListsForDiscover: (discoverName) => dispatch(actions.fetchListsForDiscover(discoverName))
    }
}
export default connect(null, mapDispatchToProps)(discoverLists);