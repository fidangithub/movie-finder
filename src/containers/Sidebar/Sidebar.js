import React, {useState, useEffect, useRef} from "react";
import classes from "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import MovieTv from "./../../components/MovieTv/MovieTv";
import FilterPart from "./../../components/FilterPart/FilterPart";
import MenuButton from "./../../components/MenuButton/MenuButton";

const sidebar = props => {
    const sidebarRef = useRef();
    const [hover, setHover] = useState(false);
    let top = 0;

    document.addEventListener("scroll", ()=>{
        let scroll = window.scrollY;
        let sidebarHeight = sidebarRef.current.clientHeight;
        let screenHeight = window.screen.height;
        if(scroll + screenHeight > sidebarHeight){
            // setTop(screenHeight - sidebarHeight);
            top = screenHeight - sidebarHeight;
        }else{
            top = 0;
        }
        if(top > 0){top = 0;}
    });
    const mouseEntered = () =>{
        if(!props.position){
            setHover(true);
        }
    }
    const mouseLeaved = () =>{
        if(!props.position){
            setHover(false);
        }
    } 
    console.log(hover, props.position);
    return (
        <div className={[classes.Sidebar, classes.SidebarOpen, 
            (hover && !props.position) ? classes.Hover : "" ].join(" ")} ref={sidebarRef}
        style={{position: `sticky`, top: `${top}px`}} 
        onMouseOver={mouseEntered} onMouseLeave={mouseLeaved}>
            <MenuButton/>
            {/* <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon} /> */}
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
const mapStateToProps = state => {
    return {
        position: state.ui.position
    }
}
export default connect(mapStateToProps)(sidebar);