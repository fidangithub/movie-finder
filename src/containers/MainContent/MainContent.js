import React from "react";
import classes from "./MainContent.css";
import Spinner from "./../../components/Spinner/Spinner"

import Search from "./../../components/Search/Search";
import RightFilters from "./../../components/RightFilters/RightFilters";
import Lists from "./../../components/Lists/Lists";
import { connect } from "react-redux"

const mainContent = props => {
    let lists = <Spinner />;
    if (props.data) {
        lists = (<Lists />);
    }
    return (
        <div className={classes.MainContent}>
            <Search />
            <RightFilters />
            {lists}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        data: state.query.listsData
    }
}

export default connect(mapStateToProps)(mainContent);

