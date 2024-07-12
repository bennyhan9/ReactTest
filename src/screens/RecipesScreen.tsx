import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CarouselRecipes from './CarouselRecipes';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const RecipesScreen = () => {
    return (
        <Stack.Navigator
          initialRouteName="CarouselRecipes"
          screenOptions={{
            headerShown: false,
            headerStyle: {backgroundColor: '#b6b6b6'},
            headerTintColor: 'white',
          }}>
          <Stack.Screen 
            name="CarouselRecipes"
            component={CarouselRecipes} 
            />
        </Stack.Navigator>
      );
}

export default RecipesScreen;
