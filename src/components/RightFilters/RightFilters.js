import React, { useState, useEffect, useRef } from "react";
import {Redirect, withRouter } from "react-router-dom";

import classes from "./RightFilters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import * as actions from "./../../store/actions/index"

const rightFilters = (props) => {
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(false);
    const [transformState, setTransformState] = useState(0);
    const containerRef = useRef();
    const filtersRef = useRef();
    const rightRef = useRef();

    //get filter data from query (not from reducer because we want it to be responsive to the query)
    let searchParams = new URLSearchParams(props.history.location.search);
    let querySort = null;
    switch (props.filterSort) {
        case "popularity.desc":
          querySort = "Sort By Popularity Max"
          break;
        case "popularity.asc":
          querySort  = "Sort By Popularity Min"
          break;
        case "release_date.desc":
          querySort = "Sort By Date Max"
          break;
        case "release_date.asc":
          querySort = "Sort By Date Min"
          break;
        case "vote_average.desc":
          querySort = "Sort By Imdb Max"
          break;
        case "vote_average.asc":
          querySort = "Sort By Imdb Min"
          break;
        default:
          querySort = null;
    }
    let queryGenres = searchParams.get("genres");
    queryGenres = queryGenres ? queryGenres.split(",") : [];
    
    let queryPeople = searchParams.get("people");
    queryPeople = queryPeople ? queryPeople.split(",") : [];

    let queryKeys = searchParams.get("keys");
    queryKeys = queryKeys ? queryKeys.split(",") : [];

    let queryImdb = [];
    let queryMinImdb = searchParams.get("minImdb");
    queryMinImdb ? queryImdb.push(queryMinImdb) : null;
    let queryMaxImdb = searchParams.get("maxImdb");
    queryMaxImdb ? queryImdb.push(queryMaxImdb) : null;

    let queryYearData = [];
    let queryYearType = searchParams.get("yearType");
    queryYearType ? queryYearData.push(queryYearType) : null;
    let queryYear = searchParams.get("year");
    queryYear ? queryYearData.push(queryYear) : null;
   
    // start from page one when filter change
    useEffect(()=>{
        props.onResetPageNumber();
    },[props.genres, props.people, props.keys,props.year, props.imdb, 
    props.searchInput, props.discoverType, props.filterSort]);
    
    useEffect(()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [props.movieData, props.similarData, props.listsData]) 
    //ADD AND DELETE URL PARAMS WHEN RIGHT FILTER CHANGES
    let queryParams = new URLSearchParams(window.location.search);
   
    useEffect(()=>{
        if(props.page !== 1 ){
            queryParams.set("page", `${props.page}`);
        }else{
            queryParams.delete("page");
        }
        props.history.push({
            search: `?${queryParams.toString()}`
        });
    }, [props.page]);

    useEffect(()=>{
        if(props.genres.length !== 0){
            let genreIds = props.genres.map(genre => genre.id);
            queryParams.set("genres", `${genreIds.join(",")}`);
        }else{
            queryParams.delete("genres");
        }
        props.history.push({
            pathname: process.env.PUBLIC_URL +`/filter/${props.filterType}`,
            search: `?${queryParams.toString()}`
        });
    }, [props.genres]); 
    useEffect(()=>{                                                 
        if(props.imdb.length !== 0) {
            queryParams.set("minImdb", `${props.imdb[0]}`);
            queryParams.set("maxImdb", `${props.imdb[1]}`);
        }else{
            queryParams.delete("minImdb");
            queryParams.delete("maxImdb");
        }
        props.history.push({
            pathname: process.env.PUBLIC_URL +`/filter/${props.filterType}`,
            search: `?${queryParams.toString()}`
        })
    }, [props.imdb]); 
    useEffect(()=>{
        if(props.year.length !== 0) {
            queryParams.set("yearType", `${props.year[0]}`);
            queryParams.set("year", `${props.year[1]}`);
        }else{
            queryParams.delete("yearType");
            queryParams.delete("year");
        }
        props.history.push({
            pathname: process.env.PUBLIC_URL + `/filter/${props.filterType}`,
            search: `?${queryParams.toString()}`
        })
    }, [props.year]); 
    useEffect(()=>{
        if(props.keys.length !== 0) {
            let keys = props.keys.join(",");
            queryParams.set("keys", `${keys}`);
        }else{
            queryParams.delete("keys");
        }
        props.history.push({
            pathname: process.env.PUBLIC_URL + `/filter/${props.filterType}`,
            search: `?${queryParams.toString()}`
        })
    }, [props.keys]); 
    useEffect(()=>{
        if(props.people.length !== 0) {
            let people = props.people.join(",");
            queryParams.set("people", `${people}`);
        }else{
            queryParams.delete("people");
        }
        props.history.push({
            pathname: process.env.PUBLIC_URL + `/filter/${props.filterType}`,
            search: `?${queryParams.toString()}`
        })
    }, [props.people]);
    useEffect(()=>{
        if(props.filterSort) {
            queryParams.set("sort", `${props.filterSort}`);
        }else{
            queryParams.delete("sort");
        }
        props.history.push({
            pathname: process.env.PUBLIC_URL + `/filter/${props.filterType}`,
            search: `?${queryParams.toString()}`
        })
    }, [props.filterSort]);

    //if there is no filter, redirect page to discover/popular, 
    let discoverRedirect = null; 
    if((props.history.location.pathname ==="/filter/movie" || props.history.location.pathname ==="/filter/tv")
     && props.history.location.search === "?"){
        let path = `/discover/${props.filterType}/Popular`;
        discoverRedirect = <Redirect to={path}/>
    }

    //right filter transition when page resize or when user add new filter 
    useEffect(() => {
        let rightFiltersWidth = rightRef.current.scrollWidth;
        let filtersWidth = filtersRef.current.scrollWidth;
        filtersRef.current.style.transform = `translateX(${transformState}px)`;
        if (transformState < 0) {
            setLeftArrowActive(true);
        } else {
            setLeftArrowActive(false);
        }
        if (rightFiltersWidth < filtersWidth + transformState || rightFiltersWidth === filtersWidth + transformState) {
            setRightArrowActive(true);
        } else {
            setRightArrowActive(false);
        }
        window.addEventListener('resize', () => {
            if (rightFiltersWidth < filtersWidth + transformState || rightFiltersWidth === filtersWidth + transformState) {
                setRightArrowActive(true);
            }
            else {
                setRightArrowActive(false);
            }
        });
    })
    const leftArrowClicked = () => {
        let transform = transformState + 100;
        setTransformState(transform);
    }

    const rightArrowClicked = () => {
        let transform = transformState - 100;
        setTransformState(transform);
    }
    const init = () => {
        if (transformState !== 0) {
            let transform = transformState + 100;
            setTransformState(transform);
        }
    }
    const removeGenreHandler = (genre) => {
        props.onGenreRemoved(genre);
        init();
    }
    const removePeopleHandler = (people) => {
        props.onPeopleRemoved(people);
        init();
    }
    const removeKeyHandler = (key) => {
        props.onKeyRemoved(key);
        init();
    }
    const removeImdbHandler = () => {
        props.onImdbRemove();
        init();
    }
    const removeHistoryHandler = () => {
        props.onHistoryRemove();
        init();
    }
    const removeFilterSortHandler = () => {
        props.onFilterSortRemove();
        init();
    }
    let sort =
        querySort ?
            (<div className={classes.RightFilter}>
                <p className={classes.RightFilterText}>{querySort}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removeFilterSortHandler()} />
            </div>)
            : null;
    let imdb =
        queryImdb.length !== 0 ?
            (<div className={classes.RightFilter}>
                <p className={classes.RightFilterText}>{queryImdb[0]} - {queryImdb[1]}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removeImdbHandler()} />
            </div>)
            : null;

    let year =
        queryYearData.length !== 0 ?
            (<div className={classes.RightFilter}>
                <p className={classes.RightFilterText}>{queryYearData[0]}: {queryYearData[1]}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removeHistoryHandler()} />
            </div>)
            : null;

    let filteredGenre = props.fetchedGenres.filter((f) => {
        return queryGenres.includes(""+f.id);
    })
    
    let genres = filteredGenre.map((g) => {
        return (
            <div className={classes.RightFilter} key={g.id}>
                <p className={classes.RightFilterText}>{g.name}</p>
                    <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removeGenreHandler(g)} />
            </div>
        );
    });
    let people = queryPeople.map((people) => {
        return (
            <div className={classes.RightFilter} key={people + Math.random*101}>
                <p className={classes.RightFilterText}>{people}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removePeopleHandler(people)} />
            </div>
        );
    });
    let keys = queryKeys.map((key) => {
        return (<div className={classes.RightFilter} key= {key + Math.random*101}>
            <p className={classes.RightFilterText}>{key}</p>
            <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                onClick={() => removeKeyHandler(key)} />
        </div>);
    });

    let leftArrowStyle = leftArrowActive ? [classes.Arrow, classes.Active] : [classes.Arrow];
    let rightArrowStyle = rightArrowActive ? [classes.Arrow, classes.Active] : [classes.Arrow];

    return (
        <div className={classes.RightFilters} ref={rightRef} >
            {discoverRedirect}
            <div className={classes.RLIcon}>
                <FontAwesomeIcon icon={["fas", "chevron-left"]} className={leftArrowStyle.join(" ")}
                    onClick={leftArrowClicked} />
                <FontAwesomeIcon icon={["fas", "chevron-right"]} className={rightArrowStyle.join(" ")}
                    onClick={rightArrowClicked} />
            </div >
            <div className={classes.FiltersContainer} ref={containerRef}>
                <div className={classes.Filters} ref={filtersRef}>
                    {genres}
                    {people}
                    {keys}
                    {sort}
                    {imdb}
                    {year}
                </div>
            </div >
        </div >
    );
}

const mapStateToProps = state => {
    return {
        fetchedGenres: state.filter.fetchedGenres,
        genres: state.filter.genres,
        keys: state.filter.keys,
        people: state.filter.people,
        imdb: state.filter.imdb,
        year: state.filter.year,
        searchInput: state.filter.searchInput,
        page: state.filter.page,
        discoverType: state.filter.discoverType,
        movieData: state.query.movieData,
        similarData: state.query.similarData,
        listsData: state.query.listsData,
        filterType: state.filter.filterType,
        filterSort: state.filter.filterSort
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGenreRemoved: genreName => dispatch(actions.removeGenre(genreName)),
        onPeopleRemoved: peopleName => dispatch(actions.removePeopleInput(peopleName)),
        onKeyRemoved: keyName => dispatch(actions.removeKeyInput(keyName)),
        onImdbRemove: () => dispatch(actions.removeImdb()),
        onHistoryRemove: () => dispatch(actions.removeHistory()),
        onResetPageNumber: () => dispatch(actions.resetPageNumber()),
        onFilterSortRemove: () => dispatch(actions.removeFilterSort())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(rightFilters));