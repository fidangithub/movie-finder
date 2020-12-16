import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "./../store/actions/index";

const movie = props => {
     useEffect(() => {
        console.log(props.history.location);
        props.onFetchDataForMovie(props.history.location)
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
// const mapStateToProps = state => {
//     return {
//         data: state.query.listsData,
//         url: state.query.base_url_images
//     }
// }
const mapDispatchToProps = dispatch => {
    return {
        onFetchDataForMovie: (path) => dispatch(actions.fetchDataForMovie(path)),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(movie));