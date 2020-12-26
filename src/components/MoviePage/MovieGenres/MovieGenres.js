import React from "react";
import classes from "./MovieGenres.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";

const genres = props => {
  
    const addGenreHandler = (newGenre, id) => {
        props.deleteFiltersAddGenre(newGenre, id);
    }
    let genres = props.movieGenres.map((genre => {
        return (<div className={classes.Section} key={genre.id}>
                <FontAwesomeIcon icon={["far", "dot-circle"]} className={classes.Icon} />
                <p className={classes.Type}
                onClick={() => addGenreHandler(genre.name, genre.id)}>{genre.name}</p>
            </div>);
    }));
    return (
        <div className={classes.Sections}>
            {genres}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        genres: state.filter.genres
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFiltersAddGenre: (genreName, genreId) => dispatch(actions.deleteFiltersAddGenre(genreName, genreId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(genres);
