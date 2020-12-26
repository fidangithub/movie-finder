import axios from "../../axios-movie";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index";

export function* fetchListsForDiscover(action) {
    let query = decodeURIComponent(action.discoverPath.pathname).replace(/\s+/g, '_');
    let filterType = query.split("/").slice(2,3).join("");
    query = query.split("/").slice(2,4).join("/").toLowerCase();
    
    yield put(actions.deleteData());
    let discoverType = query.split("/")[2];

    //we send discovertype to Rightfilters to reset page number each time when discover type changes
    yield put(actions.addDiscoverType(discoverType));

    let searchParams = new URLSearchParams(action.discoverPath.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;
    try {
        const response = yield axios.get(query, {
            params: {
                page: page
            }
        });
        yield put(
            actions.listsData(response.data.results, filterType)
        );
        yield put(
            actions.totalPagesData(response.data.total_pages)
        );
    } catch (error) {
        yield put(actions.fetchingFail());
    }
}
export function* fetchListsForFilter(action) {
    let searchParams = new URLSearchParams(action.search.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;
    let genres = searchParams.get("genres");
    let people = searchParams.get("people");
    let keys = searchParams.get("keys");
    let minImdb = searchParams.get("minImdb");
    let maxImdb = searchParams.get("maxImdb");
    let year = searchParams.get("year");
    let yearType = searchParams.get("yearType");
    let filterType = action.search.pathname.split("/").slice(2).join("");
    
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
                    return res.name === keys[i] ? keyIds.push(res.id)  : null;
                })
            } 
            catch (error) {
                yield put(actions.fetchingFail());
            }
        }
    }
    if(people !== null){
        people = people.split(",");
        for(let i = 0; i<= people.length; i++){
            try {
                const response = yield axios.get('/search/person', {
                    params: {
                        "query": `${people[i]}`
                    },
                });
                response.data.results.map(res=>{
                   return res.name.toLowerCase() === people[i].toLowerCase() ? personIds.push(res.id)  : null;
                })
            } 
            catch (error) {
                yield put(actions.fetchingFail());
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
        const response = yield axios.get(`/discover/${filterType}`, {
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
            actions.listsData(response.data.results, filterType)
        );
        yield put(
            actions.totalPagesData(response.data.total_pages)
        );
        // yield put(actions.resetPageNumber());
    } catch (error) {
        yield put(actions.fetchingFail());
    }
}
export function* fetchListsForSearch(action){
    let searchParams = new URLSearchParams(action.path.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;

    let filterType = action.path.pathname.split("/")[2];
    let query = action.path.pathname.split("/")[3];
    yield put(actions.deleteData());
    try {
        const response = yield axios.get(`/search/${filterType}`, {
            params: {
                query: query,
                page: page
            }
        });
        yield put(
            actions.totalPagesData(response.data.total_pages)
        );
        yield put(
            actions.listsData(response.data.results, filterType)
        );
        // yield put(actions.resetPageNumber());
    } catch (error) {
        yield put(actions.fetchingFail());
    }
}
export function* fetchDataForMovie(action){
    let id = action.path.pathname.split("/")[2];
    let filterType = action.path.pathname.split("/")[1];
    let searchParams = new URLSearchParams(action.path.search);
    let fetchedPage = searchParams.get("page");
    let page = fetchedPage ? fetchedPage : 1;
    yield put(actions.deleteData());
    
    try {
        const response = yield axios.get(`/${filterType}/${id}`, {
            params: {
                append_to_response: "videos"
            }
        });
        const responseCast = yield axios.get(`/${filterType}/${id}/credits`);
        const responseLanguage = yield axios.get(`/configuration/languages`);
        const responseSimilar = yield axios.get(`/${filterType}/${id}/similar`,{
            params: {
                page: page
            }
        });
        yield put(
            actions.movieData(response.data, filterType)
        );
        yield put(
            actions.castData(responseCast.data.cast)
        );
        yield put(
            actions.languageData(responseLanguage.data)
        );
        yield put(
            actions.castData(responseCast.data.cast)
        );
        yield put(
            actions.similarData(responseSimilar.data.results, filterType)
        );
        yield put(
            actions.totalPagesData(responseSimilar.data.total_pages)
        );
    } catch (error) {
        yield put(actions.fetchingFail());
    }
}