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
    console.log("heu")
    // yield put(actions.deleteData());
    // let query = "&with_genres=28";
    // try {
    //     const response = yield axios.get('/discover/movie', {
    //         params: {
    //             with_genres: "",
    //             "vote_average.gte": "5",
    //             "vote_average.lte": "5"
    //         },
    //     });
    //     // const response = yield axios.get(`discover/movie${query}`);
    //     console.log(response.data)
    //     yield put(
    //         actions.listsData(response.data.results)
    //     );
    // } catch (error) {
    //     console.log("ERROR OCCURED");
    // }
}
// export function* queryChanged(action) {
//     let query = decodeURIComponent(action.queryName).replace(/\s+/g, '_').toLowerCase();
//     // query = query.replace("discover", "movie").toLowerCase();
//     try {
//         const response = yield axios.get(`${ query } `);
//         yield put(
//             actions.listsData(response.data.results)
//         );
//     } catch (error) {
//         console.log("ERROR OCCURED");
//     }
// }