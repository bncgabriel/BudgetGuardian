import {createNativeStackNavigator} from  '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from "../pages/Register";
import Home from '../pages/Home';
import Entries from '../pages/Entries';
import Expenses from '../pages/Expenses';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Welcome"
            component = {Welcome}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name = "SignIn"
            component = {SignIn}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name = "Home"
            component = {Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name = "Register"
            component = {Register}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name = "Entries"
            component = {Entries}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name = "Expenses"
            component = {Expenses}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
}