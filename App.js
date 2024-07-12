/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './src/screens/MainScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import {store} from './src/store/redux/store';
import HomeSvg from './src/assets/icons/home.svg';
import RecipeSvg from './src/assets/icons/recipe.svg';

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: '#b6b6b6'},
        navigation: {navigation},
        headerTintColor: 'white',
        tabBarLabelStyle: {fontSize: 14, fontWeight: 500},
        tabBarStyle: {backgroundColor: '#dadada', paddingTop: 6},
        tabBarActiveTintColor: '#08a545',
      })}>
      <BottomTabs.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <HomeSvg width={24} height={24} style={{color: color}} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Recipe"
        component={RecipesScreen}
        options={{
          title: 'Recipe',
          tabBarLabel: 'Recipe',
          tabBarIcon: ({color}) => (
            <RecipeSvg width={24} height={24} style={{color: color}} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
