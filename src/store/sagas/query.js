import axios from "../../axios-movie";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* fetchListsForDiscover(action) {
    let query = decodeURIComponent(action.discoverType).replace(/\s+/g, '_');
    query = query.replace("discover", "movie").toLowerCase();
    yield put(actions.deleteData());
    try {
        const response = yield axios.get(query);
        yield put(
            actions.listsData(response.data.results)
        );
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}
export function* fetchListsForFilter(action) {
    let searchParams = new URLSearchParams(action.search);
    let genres = searchParams.get("genres");
    let peoples = searchParams.get("peoples");
    let keys = searchParams.get("keys");
    let minImdb = searchParams.get("minImdb");
    let maxImdb = searchParams.get("maxImdb");
    let year = searchParams.get("year");
    let yearType = searchParams.get("yearType");
    
    yield put(actions.deleteData());
    let keyIds = [];
    let personIds = [];

    if(keys !== null){
        keys = keys.split(",");
        for(let i = 0; i<= keys.length; i++){
            try {
                const response = yield axios.get('/search/keyword', {
                    params: {
                        "query": `${keys[i]}`
                    },
                });
                response.data.results.map(res=>{
                    res.name === keys[i] ? keyIds.push(res.id)  : null;
                })
            } 
            catch (error) {
                console.log("ERROR OCCURED");
            }
        }
    }
    if(peoples !== null){
        peoples = peoples.split(",");
        for(let i = 0; i<= peoples.length; i++){
            try {
                const response = yield axios.get('/search/person', {
                    params: {
                        "query": `${peoples[i]}`
                    },
                });
                response.data.results.map(res=>{
                    res.name.toLowerCase() === peoples[i].toLowerCase() ? personIds.push(res.id)  : null;
                })
            } 
            catch (error) {
                console.log("ERROR OCCURED");
            }
        }
    }
    let genresSearched = genres ? {"with_genres" : `${genres}`} : null;

    let yearSearched;
    if(yearType === "Release"){
       yearSearched = {"year" : `${year}`}
    }else if(yearType === "Min"){
       yearSearched = {"primary_release_date.gte" : `${year}`}
    }else if(yearType === "Max"){
       yearSearched = {"primary_release_date.lte" : `${year}`}
    }

    try {
        const response = yield axios.get('/discover/movie', {
            params: {
                ...genresSearched,
                "with_people" : `${personIds.join(",")}`,
                "with_keywords" : `${keyIds.join(",")}`,
                "vote_average.gte" : minImdb,
                "vote_average.lte" : maxImdb,
                ...yearSearched
            }
        });
        yield put(
            actions.listsData(response.data.results)
        );
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}
export function* fetchListsForSearch(action){
    yield put(actions.deleteData());
    try {
        const response = yield axios.get("/search/movie", {
            params: {
                query: action.search
            }
        });
        yield put(
            actions.listsData(response.data.results)
        );
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}