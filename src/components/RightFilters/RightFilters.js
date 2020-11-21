import React, { useState, useEffect, useRef } from "react";

import classes from "./RightFilters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "./../../store/actions/index"

const rightFilters = (props) => {
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(false);
    const [transformState, setTransformState] = useState(0);
    const containerRef = useRef();
    const filtersRef = useRef();
    const rightRef = useRef();

    // useEffect(() => {
    //     //push genre filter to the URL
    //     let genreIds = props.genres.map(genre => genre.id).join(",");
    //     console.log(genreIds);
    //     props.history.push({
    //         pathname: '/filter',
    //         search: `?genres=${genreIds}?keys=${props.keys}?people=${props.people}`
    //     })
    // }, [props.genres, props.keys, props.people, props.imdb, props.year]);

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

    let imdb =
        props.imdb.length !== 0 ?
            (<div className={classes.RightFilter}>
                <p className={classes.RightFilterText}>{props.imdb[0]} - {props.imdb[1]}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removeImdbHandler()} />
            </div>)
            : null;

    let year =
        props.year.length !== 0 ?
            (<div className={classes.RightFilter}>
                <p className={classes.RightFilterText}>{props.year[0]} - {props.year[1]}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removeHistoryHandler()} />
            </div>)
            : null;

    let genres = props.genres.map((genre) => {
        return (<div className={classes.RightFilter} key={genre.id}>
            <p className={classes.RightFilterText}>{genre.name}</p>
            <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                onClick={() => removeGenreHandler(genre)} />
        </div>);
    });
    let peoples = props.peoples.map((people) => {
        return (
            <div className={classes.RightFilter}>
                <p className={classes.RightFilterText}>{people}</p>
                <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                    onClick={() => removePeopleHandler(people)} />
            </div>
        );
    });
    let keys = props.keys.map((key) => {
        return (<div className={classes.RightFilter}>
            <p className={classes.RightFilterText}>{key}</p>
            <FontAwesomeIcon icon={["far", "times-circle"]} className={classes.XIcon}
                onClick={() => removeKeyHandler(key)} />
        </div>);
    });

    let leftArrowStyle = leftArrowActive ? [classes.Arrow, classes.Active] : [classes.Arrow];
    let rightArrowStyle = rightArrowActive ? [classes.Arrow, classes.Active] : [classes.Arrow];

    return (
        <div className={classes.RightFilters} ref={rightRef} >
            <div className={classes.RLIcon}>
                <FontAwesomeIcon icon={["fas", "chevron-left"]} className={leftArrowStyle.join(" ")}
                    onClick={leftArrowClicked} />
                <FontAwesomeIcon icon={["fas", "chevron-right"]} className={rightArrowStyle.join(" ")}
                    onClick={rightArrowClicked} />
            </div >
            <div className={classes.FiltersContainer} ref={containerRef}>
                <div className={classes.Filters} ref={filtersRef}>
                    {genres}
                    {peoples}
                    {keys}
                    {imdb}
                    {year}
                </div>
            </div >
        </div >
    );
}

const mapStateToProps = state => {
    return {
        genres: state.filter.genres,
        keys: state.filter.keys,
        peoples: state.filter.peoples,
        imdb: state.filter.imdb,
        year: state.filter.year
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGenreRemoved: genreName => dispatch(actions.removeGenre(genreName)),
        onPeopleRemoved: peopleName => dispatch(actions.removePeopleInput(peopleName)),
        onKeyRemoved: keyName => dispatch(actions.removeKeyInput(keyName)),
        onImdbRemove: () => dispatch(actions.removeImdb()),
        onHistoryRemove: () => dispatch(actions.removeHistory())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(rightFilters));