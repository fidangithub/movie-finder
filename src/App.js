import React, { Suspense, useEffect } from 'react';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import DiscoverLists from "./containers/DiscoverLists";
import FilterLists from "./containers/FilterLists";
// import { connect } from "react-redux";
// import * as actions from "./store/actions/query";

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars, faSignal, faChevronUp, faUserPlus, faPlus, faKey, faHistory, faSearch,
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';


import { faTimesCircle, faHeart, faCalendarAlt, faDotCircle, faPlusSquare, faStar }
  from '@fortawesome/free-regular-svg-icons';

import { faYoutube, faMegaport, faImdb } from '@fortawesome/free-brands-svg-icons';

library.add(
  faBars,
  faTimesCircle,
  faHeart,
  faSignal,
  faYoutube,
  faCalendarAlt,
  faMegaport,
  faDotCircle,
  faChevronUp,
  faUserPlus,
  faPlus,
  faPlusSquare,
  faKey,
  faHistory,
  faImdb,
  faSearch,
  faChevronLeft,
  faChevronRight,
  faStar
);

const app = props => {
  return (
    <React.Fragment>
      <Layout />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact render={() => (<Redirect from="/" to="/discover/Popular" />)} />
          <Route path="/discover/:id" exact component={DiscoverLists} />
          <Route path="/filter" exact component={FilterLists} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default app; 