
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cafe from '../screens/Cafe';

import Home from '../screens/Home';
import ProductSingle from '../screens/ProductSingle';
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
                 <Stack.Screen name= "ProductSingle" component={ProductSingle} />
            </Stack.Navigator>

        </NavigationContainer>      
    )
} 