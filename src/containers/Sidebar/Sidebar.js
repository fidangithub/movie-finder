import React, {useState, useEffect, useRef} from "react";
import classes from "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import MovieTv from "./../../components/MovieTv/MovieTv";
import FilterPart from "./../../components/FilterPart/FilterPart";

const sidebar = props => {
    const [mobile, setMobile] = useState(null);
    const [closeSidebar, setCloseSidebar] = useState(true);

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


    const sidebarRef = useRef();
    const [hover, setHover] = useState(false);
    // fix sidebar position when user scroll page
    let top = 0;

    document.addEventListener("scroll", ()=>{
        let scroll = window.scrollY;
        let sidebarHeight = sidebarRef.current.clientHeight;
        let screenHeight = window.screen.height;
        if(scroll + screenHeight > sidebarHeight){
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
    
    useEffect(()=>{
        //props.position changes mean menubutton clicked, when menubutton clicked sidebars Open
        setCloseSidebar(false);
    },[props.position]);

    let style =[classes.Sidebar,
        (hover && !props.position ) ? classes.Hover : "",
        mobile && closeSidebar ? classes.SidebarVanish : null];
    
    return (
        <React.Fragment>
            {mobile ? (<div className={closeSidebar ? classes.Remove : classes.Modal} 
                onClick={()=>setCloseSidebar(true)}></div>) : null}
            <div className={style.join(" ")} ref={sidebarRef} 
            style={mobile ? null : {position: `sticky`, top: `${top}px`}} 
            onMouseOver={mouseEntered} 
            onMouseLeave={mouseLeaved}>
                <FontAwesomeIcon icon={["fas", "times"]} className={classes.XIcon} 
                onClick={() => setCloseSidebar(true)}/> 
                <MovieTv />
                <FilterPart />
                <div className={classes.Footer}> 
                    <p>Powered by 
                        <a className={classes.Link} href="https://developers.themoviedb.org/3" target="blank">
                        The Movie DB </a>
                    </p>
                    <p className={classes.Me}>© 2021 
                        <a href="https://fidansuleymanova.com" target="blank">FidanSuleymanova.</a>
                    </p> 
                </div>
            </div>
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        position: state.ui.position
    }
}
export default connect(mapStateToProps)(sidebar);