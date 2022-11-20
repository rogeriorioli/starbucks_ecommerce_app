
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cafe from '../screens/Cafe';

import Home from '../screens/Home';
const Stack = createNativeStackNavigator();

export default function Routes() { 
    return(
        <NavigationContainer>
             <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="Cafe" component={Cafe}  />
            </Stack.Navigator>
        </NavigationContainer>      
    )
} 