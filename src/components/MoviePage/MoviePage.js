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

const moviePage = props => {
    let videoKey = props.movieData.videos.results[0]? props.movieData.videos.results[0].key : null;
    return (
        <React.Fragment>
            <div className={classes.Movie}>
                <div className={classes.DescriptionWrapper}>
                    <div className={classes.Description}>
                    <MovieTitles 
                    title={props.filterType ==="movie" ? props.movieData.title : props.movieData.name} 
                    tagline={props.movieData.tagline}/>
                    <MovieTime languageData={props.languageData} language={props.movieData.original_language}
                    runtime={props.movieData.runtime}
                    date={props.filterType === "movie" ? props.movieData.release_date :props.movieData.first_air_date}
                     imdb={props.movieData.vote_average}
                    voteAverage={props.movieData.vote_count}/>
                    <MovieGenres movieGenres={props.movieData.genres}/>
                    {props.movieData.overview ? <MovieOverview overview={props.movieData.overview}/> : null}
                    {props.castData.length !==0 ? <MovieCast cast={props.castData} url={props.url}/> : null}
                    <MovieButtons website={props.movieData.homepage} imdb={props.movieData.imdb_id}/>
                    </div>
                </div>
                <MovieImage url={props.url} path={props.movieData.poster_path} videoKey={videoKey}/>
           </div>
           {props.similarData[0] ? props.similarData[0].length !==0 ? 
           (<p className={classes.Similar}>Similar {props.filterType==="movie" ? "Movies" : "TV Shows"}</p>)
           : null : null}
           {props.similarData[0] ? props.similarData[0].length !==0 ? 
           (<Lists data={props.similarData}/>) : null : null}
        </React.Fragment> 
    )
}
const mapStateToProps = state => {
    return {
        movieData: state.query.movieData[0],
        filterType: state.query.movieData[1],
        castData: state.query.castData,
        url: state.query.base_url_images,
        languageData: state.query.languageData,
        similarData: state.query.similarData
    }
}

export default connect(mapStateToProps)(moviePage);
