import React, { useState, useEffect, useRef } from "react";
import classes from "./MovieCast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotFoundMan from "./../../../svg/notFoundMan.svg";
import NotFoundWoman from "./../../../svg/notFoundWoman.svg";
import NotFound from "./../../../../src/svg/notFound.svg"


const cast = props => {
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(false);
    const [transformState, setTransformState] = useState(0);

    const castWrapRef = useRef();
    const castsRef = useRef();

    useEffect(() => {
        let castWrapWidth = castWrapRef.current.offsetWidth;
        let castsWidth = castsRef.current.scrollWidth;
        console.log(castWrapRef);

        castsRef.current.style.transform = `translateX(${transformState}px)`;
        if (transformState < 0) {
            setLeftArrowActive(true);
        } else {
            setLeftArrowActive(false);
        }
        if (castWrapWidth < castsWidth + transformState || castWrapWidth === castsWidth + transformState) {
            setRightArrowActive(true);
        } else {
            setRightArrowActive(false);
        }
        window.addEventListener('resize', () => {
            if (castWrapWidth < castsWidth + transformState || castWrapWidth === castsWidth + transformState) {
                setRightArrowActive(true);
            }
            else {
                setRightArrowActive(false);
            }
        });
    })
    const leftArrowClicked = () => {
        let transform = transformState + 160;
        setTransformState(transform);
    }

    const rightArrowClicked = () => {
        let transform = transformState - 160;
        setTransformState(transform);
    }

    // let leftArrowStyle;
    // let rightArrowStyle;

    // if(leftArrowActive){
    //     leftArrowStyle = [classes.Active];
    // }
    // if(rightArrowActive){
    //     leftArrowStyle = [classes.Active];
    // }

    let castImageUrlPath = props.cast.map((cast)=>{
        return cast.profile_path
    });
    let images = castImageUrlPath.map((path, id)=>{
        if(path){
            return (<img src={`${props.url}w500/${path}`} alt="" className={classes.Cast} />);
        }else{
            if(props.cast[id].gender === 1){
                return (<img src={NotFoundWoman} alt="" className={classes.Cast} />)
            }else if(props.cast[id].gender === 2){
                return (<img src={NotFoundMan} alt="" className={classes.Cast} />);
            }else{
                return (<img src={NotFound} alt="" className={classes.Cast} />);
            }
        }
    })
    return (
        <div>
            <p className={classes.Header}>CAST</p>
            <div className={classes.CastContainer}>
                <div className={classes.CastLeftRightIcons}>
                    <div className={leftArrowActive ? classes.Active : null} >
                        <FontAwesomeIcon icon={["fas", "chevron-left"]} onClick={leftArrowClicked} />
                    </div>
                    <div className={rightArrowActive ?  classes.Active : null}>
                        <FontAwesomeIcon icon={["fas", "chevron-right"]} onClick={rightArrowClicked} />
                    </div>
                    
                </div>
                <div className={classes.CastsWrapper} ref={castWrapRef}>
                    <div className={classes.Casts} ref={castsRef}>
                        {images}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default cast;
