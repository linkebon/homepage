import {combineReducers} from 'redux';
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";
import tweetsReducer from "./tweetsReducer";
import buyHouseCalculatorReducer from './buyHouseCalculatorReducer';

export default combineReducers({
    todoReducer: todoReducer,
    counterReducer: counterReducer,
    tweetsReducer: tweetsReducer,
    buyHouseCalculatorReducer: buyHouseCalculatorReducer
});