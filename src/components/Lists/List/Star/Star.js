import React from "react";
import classes from "./Star.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

import Stars from 'react-rating';

const star = props => {
    return (
           
                
                // <div className={classes.StarIconWrapper}>
                    <Stars 
                emptySymbol={<FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} size="lg" />}
                fullSymbol={<FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} size="lg" />}
                initialRating={5}
                readonly/>
                    /* <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["fas", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} />
                    <FontAwesomeIcon icon={["far", "star"]} className={classes.StarIcons} />
                </div> */
         
    )
}

export default star;
