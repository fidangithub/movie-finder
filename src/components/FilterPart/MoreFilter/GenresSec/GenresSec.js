import React, { useState, useEffect } from "react";
import classes from "./GenresSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect, NavLink, withRouter } from "react-router-dom"
import { connect } from "react-redux";
import * as actions from "./../../../../store/actions/index";

const genresSection = props => {
    const [genresIsCloseState, setGenresIsCloseState] = useState(false);
    const [styleState, setStyleState] = useState(true);
    const addGenreHandler = (newGenre, id) => {
        const hasGenre = props.genres.some((genre) => { return genre.name === newGenre });
        if (!hasGenre) {
            props.onGenreAdded(newGenre, id);
        }
    }
    //button clicked; when page position is close(false), close genre list
    useEffect(()=>{
        props.position ? setGenresIsCloseState(false) : setGenresIsCloseState(true);
    }, [props.position])

    ////////////// ADDING GENRES  /////////////////
    let genre = props.fetchedGenres.map((genre) => {
        let a = props.genres.some((g) => g.name === genre.name);
        return (
            <li className={classes.Genre} key={genre.name}
                onClick={() => addGenreHandler(genre.name, genre.id)} >
                <FontAwesomeIcon icon={["far", "dot-circle"]}
                    className={[classes.GenreIcon, a ? classes.Color : ""].join(" ")} />
                <p className={a ? classes.Color : ""}>{genre.name}</p>
            </li>);
    });

    ///// TOGGLE LIST WHEN USE CLICK UP-DOWN BUTTON ///////
    let upDownHandler = () => {
        let newToggle = !genresIsCloseState;
        setGenresIsCloseState(newToggle);
    }
    useEffect(() => {
        if (!genresIsCloseState) {
            setTimeout(() => {
                setStyleState(false);
            }, 200)
        } else {
            setStyleState(true);
        }
    }, [genresIsCloseState]);

    return (
        <div className={classes.GenresSection}>
            <div className={classes.GenresCaption} onClick={upDownHandler}>
                <div className={classes.GenresMain}>
                    <FontAwesomeIcon icon={["fab", "megaport"]}
                        className={[classes.GenresIcon,
                        genresIsCloseState ? "" : classes.ActiveIcon].join(" ")} />
                    <p className={[classes.GenresText,
                    genresIsCloseState ? "" : classes.GenresTextActive].join(" ")}>Genres</p>
                </div>
                <FontAwesomeIcon icon={["fas", "chevron-up"]}
                    className={[classes.UpIcon, genresIsCloseState ? classes.RotateIcon : ""].join(" ")} />
            </div >
            <ul
                className={[classes.GenresList, genresIsCloseState ? classes.HideList : "", styleState ? classes.Hide : ""].join(" ")}>
                {genre}
            </ul>
        </div >
    );
};

const mapStateToProps = state => {
    return {
        fetchedGenres: state.filter.fetchedGenres,
        genres: state.filter.genres,
        position: state.ui.position
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGenreAdded: (genreName, genreId) => dispatch(actions.addGenre(genreName, genreId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(genresSection));