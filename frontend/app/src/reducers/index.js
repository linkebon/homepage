import {combineReducers} from 'redux';
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
    todoReducer: todoReducer,
    counterReducer: counterReducer,
    tweetsReducer: tweetsReducer
});