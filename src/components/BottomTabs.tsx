import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Welcome from '../screens/Welcome';
import Info from '../screens/Info';
import List from '../screens/List';
import Colors from '../constans/Colors';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{    
          activeTintColor: `#000000`,
          style:{ position: 'absolute',
          bottom:0,
          backgroundColor: 'crimson',
        },
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Welcome} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen 
        name="Plans" 
        component={List} 
        options={{
            tabBarLabel: 'Plans',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="playlist-edit" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen 
        name="Characters" 
        component={Info} 
        options={{
            tabBarLabel: 'Characters',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="human-handsdown" color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;