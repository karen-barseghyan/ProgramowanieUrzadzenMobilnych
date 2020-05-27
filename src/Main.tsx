import React, { FC } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './components/BottomTabs';

interface IMainProps { }

const Stack = createStackNavigator();

const Main: FC<IMainProps> = props => {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
};
export default Main;