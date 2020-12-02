import React, {useState, useEffect, useRef} from "react";
import classes from "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MovieTv from "./../../components/MovieTv/MovieTv";
import FilterPart from "./../../components/FilterPart/FilterPart"

const sidebar = props => {
    const sidebarRef = useRef();
    const [top, setTop] = useState(0);

    document.addEventListener("scroll", ()=>{
        let scroll = window.scrollY;
        let sidebarHeight = sidebarRef.current.clientHeight;
        let screenHeight = window.screen.height;
        if(scroll + screenHeight > sidebarHeight){
            setTop(screenHeight - sidebarHeight);
        }else{
            setTop(0);
        }
    });
    if(top > 0){setTop(0)}
    return (
        <div className={[classes.Sidebar, classes.SidebarOpen].join(" ")} ref={sidebarRef}
        style={{position: `sticky`, top: `${top}px`}}>
            <button className={classes.Menu}>
            <FontAwesomeIcon icon={["fas", "bars"]} className={classes.MenuIcon} />
            </button>
            <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon} />
            <MovieTv />
            <FilterPart />
            <div className={classes.Footer}> 
                <p>Powered by 
                    <a className={classes.Link} href="https://developers.themoviedb.org/3" target="blank">
                        The Movie DB </a>
                </p>
                <p className={classes.Me}>© 2020 <span>FidanSuleymanova.</span></p> 
            </div>
        </div>

    );
}

export default sidebar;