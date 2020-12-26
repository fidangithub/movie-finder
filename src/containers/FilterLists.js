import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "./../store/actions/index";
import { withRouter } from "react-router-dom";
import Lists from "./../components/Lists/Lists";
import Spinner from "./../components/Spinner/Spinner";
import ErrorPage from "./../components/ErrorPage/ErrorPage";

const filterLists = props => {
    useEffect(() => {
        props.onFetchListsForFilter(props.history.location);
    }, [props.history.location]);

    let lists = props.data[0] ? <Lists data={props.data}/> : props.error ? <ErrorPage/> :<Spinner/>
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
            </Helmet>
            {lists}
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        data: state.query.listsData,
        error: state.query.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchListsForFilter: (search) => dispatch(actions.fetchListsForFilter(search))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(filterLists));