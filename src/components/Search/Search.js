import React from "react";
import classes from "./Search.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const search = (props) => {
    return (
        <form action="#" className={classes.Search}>
            <input type="text" className={classes.SearchInput} placeholder="Search for movie..." />
            <button className={classes.SearchButton}>
                <FontAwesomeIcon icon={["fas", "search"]} className={classes.SearchIcon} />
            </button>
        </form>
    );
}
export default search;