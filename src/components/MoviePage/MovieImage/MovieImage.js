import React, { useState } from "react";
import classes from "./MovieImage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyCover from "./../../../svg/emptyCover.svg";
// import ModalVideo from 'react-modal-video';


const image = props => {
    const [videoOpen, setVideoOpened] = useState(false);

    let image;
    if(props.path){
        image = (<img src={`${props.url}w500/${props.path}`} alt="" className={classes.Shadow}/>);
    }else{
        image = (<img src={EmptyCover} alt=""/>);
    }
    let videoSrc ="https://www.youtube.com/embed/"+props.videoKey+"?autoplay=1&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark"

    let video = videoOpen ?
     (<div className={classes.ModalVideo} onClick={() => setVideoOpened(false)}>
            <div className={classes.ModalVideoBody}>
                <div className={classes.ModalVideoInner}>
                    <div className={classes.ModalVideoMovieWrap}>
                        <button className={classes.ModalVideoCloseBtn} onClick={() => setVideoOpened(false)}> </button>
                        <iframe src={videoSrc} title="video"
                        allowFullScreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen"
                        frameBorder="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>) : null;
        
    return (
        <React.Fragment>
            <div className={classes.Image}>
                <div className={classes.ImageWrapper}>
                    {image}
                    {props.videoKey ? <div className={classes.PlayButton} onClick={() => setVideoOpened(true)}>
                        <FontAwesomeIcon icon={["fas", "play"]} className={classes.Icon}/> 
                    </div> : null}
                </div>
            </div>
            {video}
      </React.Fragment>
    )
}


export default image;
