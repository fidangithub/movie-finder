import React from 'react';
import Layout from "./hoc/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars, faSignal, faChevronUp, faUserPlus, faPlus, faKey, faHistory, faSearch,
  faChevronLeft, faChevronRight, faPlay, faHome, faExternalLinkAlt
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
  faStar,
  faPlay,
  faHome,
  faExternalLinkAlt
);

const app = props => {
  return (
    <Layout />
  );
};

export default app; 