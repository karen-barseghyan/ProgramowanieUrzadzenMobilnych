import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {Text, Button, View} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { IState } from '../reducers';
import { IToDoListReducer } from '../reducers/todoListReducer';
import Colors from '../constans/Colors';
import { removeListElement } from '../actions/todolistActions';

interface IListElement {
    name: string;
    description: string;
    id: number;
}

const Container = styled.View`
    margin: 50px 10px 0 10px;
`;

const TextArea = styled.View`
    width: 90%;
`;
const IconArea = styled.View`
    width: 10%;
    height: 100%;
    position: absolute;
    right: 0;
    flex: 1;
    flexDirection: row;
`;

const ListElement = styled.View`
    border: 4px solid ${Colors.red};
    backgroundColor: ${Colors.lightgray};
    margin: 0 0 0 0;
    marginBottom: 10px;
    padding: 5px;
`;

type RemoveListElement = ReturnType<typeof removeListElement>;

const TodoList: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const todoListState = useSelector<IState, IToDoListReducer>(state => state.todoList);
    const goToForm = () => {
        props.switchView(true);
    };
    const removeElem = (id: number) => {
        dispatch<RemoveListElement>(removeListElement(id));
    }
    return (
        <Container>
            {todoListState.todoList.map((elem: IListElement, index: number)=>
            <ListElement key={index}>
                <TextArea>
                    <Text>{elem.name}</Text>
                    <Text>{elem.description}</Text>
                </TextArea>
                <IconArea>
                    <MaterialCommunityIcons
                        name="close-circle"
                        color={Colors.black}
                        value={elem.id}
                        size={32}
                        onPress={()=>{
                            removeElem(elem.id);
                        }}
                    />
                </IconArea>
            </ListElement>
            )}
            
            <Button title="Add" color="#008000" onPress={goToForm}/>
        </Container>
    )
}

export default TodoList;