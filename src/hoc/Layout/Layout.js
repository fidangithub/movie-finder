import React, {Suspense, useState, useEffect} from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import classes from "./Layout.css"
import { connect } from "react-redux";

import MenuButton from "./../../components/MenuButton/MenuButton";
import Sidebar from "./../../containers/Sidebar/Sidebar";
import Search  from "./../../components/Search/Search";
import RightFilters from "./../../components/RightFilters/RightFilters";
import DiscoverLists  from "./../../containers/DiscoverLists";
import FilterLists from "./../../containers/FilterLists";
import SearchLists from "./../../containers/SearchLists";
import Movie from "./../../containers/Movie";
import ErrorPage from "./../../components/ErrorPage/ErrorPage";


const layout = props => {
    const [mobile, setMobile] = useState(null);

    const mobileHandler = () => {
       window.matchMedia("(max-width: 1200px)").matches
      ? setMobile(true)
      : setMobile(false);
    };

    useEffect(() => {
        mobileHandler();
        window.addEventListener("resize", mobileHandler);
        return () => window.removeEventListener("resize", mobileHandler);
    }, []);

    return (
        <div className={classes.Container}>
            <MenuButton/>
            <Sidebar />
            <div className={[classes.MainContent, props.position ? "" : mobile ? null :classes.Open].join(" ")}  >
                <Search />
                <RightFilters />
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path= "/" exact render={() => (<Redirect from="/" to="/discover/movie/Popular" />)} />
                        <Route path="/discover/:id/:id" exact component={DiscoverLists} />
                        <Route path="/filter/:id" exact component={FilterLists} />
                        <Route path="/search/:id/:id" exact component={SearchLists} />
                        <Route path="/movie/:id" exact component={Movie} />
                        <Route path="/tv/:id" exact component={Movie} />
                        <Route path="/error" component={ErrorPage} />
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        position: state.ui.position
    }
}

export default connect(mapStateToProps)(layout);
