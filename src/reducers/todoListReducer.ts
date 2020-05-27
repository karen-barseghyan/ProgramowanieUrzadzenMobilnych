import * as actionTypes from '../actions/types/todolistTypes';
import { State } from 'react-native-gesture-handler';

interface IListElement {
    name: string;
    description: string;
    id: number;
}


export interface IToDoListReducer {
    currentId: number;
    todoList: IListElement[];
}


const defaultState = (): IToDoListReducer => ({
    currentId: 6,
    todoList: [{
        name: "Example 1",
        description: "Description 1",
        id: 0
    },
    {
        name: "Example 2",
        description: "Description 2",
        id: 1
    },
    {
        name: "Example 3",
        description: "Description 3",
        id: 2
    },
    {
        name: "Example 4",
        description: "Description 4",
        id: 3
    },
    {
        name: "Example 5",
        description: "Description 5",
        id: 4
    },
    {
        name: "Example 6",
        description: "Description 6",
        id: 5
    },
],
    
});

export default (state = defaultState(), action: any): IToDoListReducer => {
    switch (action.type) {
        case actionTypes.New_Element: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElement],
            };
        }
        case actionTypes.Remove_Element: {
            return {
                ...state,
                todoList: state.todoList.filter(elem => elem.id !== action.elemId)
            };
        }

        default: {
            return state;
        }
    }
};

