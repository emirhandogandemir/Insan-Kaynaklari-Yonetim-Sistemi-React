import {combineReducers} from "redux";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer =combineReducers({
    favorite:favoriteReducer
})

export default rootReducer;