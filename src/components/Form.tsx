//FORM TSX

import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {TextInput, Button, View, Text} from 'react-native';
import { IState } from '../reducers';
import { IToDoListReducer } from '../reducers/todoListReducer';
import { useSelector, useDispatch } from 'react-redux';
import { setNewListElement, removeListElement } from '../actions/todolistActions';
//import { IListElement } from '../components/ToDoListElement';
import Colors from '../constans/Colors';


interface IListElement {
    name: string;
    description: string;
    id: number;
}

const Container = styled.View`
    margin: 80px 20px 0 20px;
`;

const CloseButton = styled.Button`
    marginTop: 100px;
`;

const TitleInput = styled.TextInput`
    border: 1px black solid;
    fontWeight: bold;
    padding: 5px;
    width: 100%;
    marginBottom: 20px;
    color: ${Colors.black};
    border: 4px solid ${Colors.red};
    backgroundColor: ${Colors.lightgray};
`;

const CustomTextInput = styled.TextInput`
    border: 1px black solid;
    padding: 5px;
    color: black;
    width: 100%;
    marginBottom: 20px;
    color: ${Colors.black};
    border: 4px solid ${Colors.red};
    backgroundColor: ${Colors.lightgray};
`;



type SetNewListElement = ReturnType<typeof setNewListElement>;

const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const todoListState = useSelector<IState, IToDoListReducer>(state => state.todoList);
    let t_name = '';
    let t_desc = '';
    const [nameInput, setNameInput] = useState<string>(t_name);
    const [descInput, setDescInput] = useState<string>(t_desc);
    

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
        
    }
    const descriptionValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);

    }
    const saveData = () => {
        if (nameInput.length > 0 && descInput.length>0){
                dispatch<SetNewListElement>(setNewListElement({
                    name: nameInput,
                    description: descInput,
                    id: todoListState.currentId++
                } as IListElement));
                props.switchView(false);          
        }
    }

    const Close = () => {
        props.switchView(false);
    }

    return (
        <Container>
            <TitleInput value={nameInput} onChange={nameValueChange}/>
            <CustomTextInput value={descInput} onChange={descriptionValueChange}/>
            <Button color="#008000" title="Save" onPress={saveData}/>
            <Text></Text>
            <CloseButton color="crimson" title="Close" onPress={Close}/>
        </Container>
    )
}

export default Form;