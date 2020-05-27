import { combineReducers } from 'redux';

import todoList, { IToDoListReducer } from './todoListReducer';

export default combineReducers({
    todoList
});

export interface IState {
    todoList: IToDoListReducer;
}