// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainNavigator} />
        {/* Añade más pantallas aquí según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
