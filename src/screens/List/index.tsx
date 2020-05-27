import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native';
import Form from '../../components/Form';
import TodoList from '../../components/ToDoList';

const List: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);
    return (
        <ScrollView style={{backgroundColor: '#000000'}}>
            {formView ? (
                <Form switchView={setFormView}/>
            ) : (
                <TodoList switchView={setFormView}/>
            )}
        </ScrollView>
    );
};
export default List;