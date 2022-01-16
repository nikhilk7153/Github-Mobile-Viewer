import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import RepositoryScreen from './screens/RepositoryScreen';
import FollowersScreen from './screens/FollowersScreen';
import FollowingScreen from './screens/FollowingScreen';
import ErrorScreen from './screens/ErrorScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
* This is the main class that will run the class and call each of the individual tabs for the app to be
* rendered
*/
const Stack = createNativeStackNavigator();

/**
* Calls on each of the individual tabs
* @returns the screens for each of the four tabs
*/
function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile Screen" component = {ProfileScreen}
              initialParams={{viewerType: "viewer", userName: ""}}/>
      <Stack.Screen name="Repository Screen" component= {RepositoryScreen} />
      <Stack.Screen name="Following Screen" component= {FollowingScreen} />
      <Stack.Screen name="Followers Screen" component= {FollowersScreen} />
      <Stack.Screen name="Error Screen" component = {ErrorScreen} />
    </Stack.Navigator>
  );
}

/**
* Calls on the MyTabs function to return all of the four tabs for the app
* @returns the screens for each of the four tabs
*/
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

