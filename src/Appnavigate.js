import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './Home';

const Stack = createStackNavigator();

function Appnavigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator  >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Appnavigate;
