import React from "react";
import classes from "./MenuButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuButton = props => {
    return (
        <button className={classes.Menu}>
            <FontAwesomeIcon icon={["fas", "bars"]} className={classes.MenuIcon} />
        </button>
    );
}

export default menuButton;