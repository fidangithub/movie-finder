import React from "react";
import classes from "./MoviePage.css";
import { connect } from "react-redux";
import MovieTitles from "./MovieTitles/MovieTitles";
import MovieTime from "./MovieTime/MovieTime";
import MovieGenres from "./MovieGenres/MovieGenres";
import MovieOverview from "./MovieOverview/MovieOverview";
import MovieCast from "./MovieCast/MovieCast";
import MovieButtons from "./MovieButtons/MovieButtons";
import MovieImage from "./MovieImage/MovieImage";
import Lists from "./../Lists/Lists";
import { similarData } from "../../store/actions";

const moviePage = props => {
    console.log(props.similarData, typeof props.similarData);

    return (
        <React.Fragment>
            <div className={classes.Movie}>
                <div className={classes.DescriptionWrapper}>
                    <div className={classes.Description}>
                    <MovieTitles title={props.movieData.title} tagline={props.movieData.tagline}/>
                    <MovieTime languageData={props.languageData} language={props.movieData.original_language} runtime={props.movieData.runtime}
                    date={props.movieData.release_date} imdb={props.movieData.vote_average}
                    voteAverage={props.movieData.vote_count}/>
                    <MovieGenres genres={props.movieData.genres}/>
                    {props.movieData.overview ? <MovieOverview overview={props.movieData.overview}/> : null}
                    {props.castData.length !==0 ? <MovieCast cast={props.castData} url={props.url}/> : null}
                    <MovieButtons/>
                    </div>
                </div>
                <MovieImage url={props.url} path={props.movieData.poster_path}/>
           </div>
           {props.similarData ? props.similarData.length !==0 ? 
           (<p className={classes.Similar}> SIMILAR MOVIES</p>) : null : null}
           {props.similarData ? props.similarData.length !==0 ? 
           (<Lists data={props.similarData}/>) : null : null}
        </React.Fragment> 
    )
}
const mapStateToProps = state => {
    return {
        movieData: state.query.movieData,
        castData: state.query.castData,
        url: state.query.base_url_images,
        languageData: state.query.languageData,
        similarData: state.query.similarData
    }
}

export default connect(mapStateToProps)(moviePage);
