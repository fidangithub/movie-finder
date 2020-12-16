import axios from "../../axios-movie";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* fetchListsForDiscover(action) {
    let query = decodeURIComponent(action.discoverPath.pathname).replace(/\s+/g, '_');
    query = query.replace("discover", "movie").toLowerCase();
    yield put(actions.deleteData());

    let discoverType = query.split("/")[2];
    yield put(actions.addDiscoverType(discoverType));

    let searchParams = new URLSearchParams(action.discoverPath.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;
    console.log(query, page)
    try {
        const response = yield axios.get(query, {
            params: {
                page: page
            }
        });
        yield put(
            actions.listsData(response.data.results)
        );
        yield put(
            actions.totalPagesData(response.data.total_pages)
        );
        // yield put(actions.resetPageNumber());
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}
export function* fetchListsForFilter(action) {
    let searchParams = new URLSearchParams(action.search.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;
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
                ...yearSearched,
                page: page
            }
        });
        yield put(
            actions.listsData(response.data.results)
        );
        yield put(
            actions.totalPagesData(response.data.total_pages)
        );
        // yield put(actions.resetPageNumber());
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}
export function* fetchListsForSearch(action){
    let searchParams = new URLSearchParams(action.path.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;

    let search = action.path.pathname.split("/")[2];
    yield put(actions.deleteData());
    try {
        const response = yield axios.get("/search/movie", {
            params: {
                query: search,
                page: page
            }
        });
        yield put(
            actions.totalPagesData(response.data.total_pages)
        );
        yield put(
            actions.listsData(response.data.results)
        );
        // yield put(actions.resetPageNumber());
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}
export function* fetchDataForMovie(action){
    let movieId = action.path.pathname.split("/")[2];
    yield put(actions.deleteData());
    try {
        const response = yield axios.get(`/movie/${movieId}`);
        const responseCast = yield axios.get(`/movie/${movieId}/credits`);
        const responseLanguage = yield axios.get(`/configuration/languages`);
        const responseSimilar = yield axios.get(`/movie/${movieId}/similar`);
        // yield put(
        //     actions.totalPagesData(1)
        // );
        yield put(
            actions.movieData(response.data)
        );
        yield put(
            actions.castData(responseCast.data.cast)
        );
        yield put(
            actions.languageData(responseLanguage.data)
        );
        yield put(
            actions.similarData(responseSimilar.data.results)
        );
        yield put(
            actions.totalPagesData(responseSimilar.data.total_pages)
        );
        // yield put(actions.resetPageNumber());
    } catch (error) {
        console.log("ERROR OCCURED");
    }
}