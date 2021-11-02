import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { epicsFetchList, initEpicsFetchList } from "./../epics";
import serviceFetchPostsReducer from './../reducer/serviceFetchPostsReducer/serviceFetchPostsReducer';


const reducer = combineReducers({
    serviceFetchPosts: serviceFetchPostsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
    epicsFetchList,
    initEpicsFetchList,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;