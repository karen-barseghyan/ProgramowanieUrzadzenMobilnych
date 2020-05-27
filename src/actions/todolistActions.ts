import * as actionTypes from './types/todolistTypes';

interface IListElement {
    name: string;
    description: string;
    id: number;
}


export const setNewListElement = (newElement: IListElement) => ({
    type: actionTypes.New_Element,
    newElement
})

export const removeListElement = (elemId) => ({
    type: actionTypes.Remove_Element,
    elemId
})


