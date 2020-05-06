import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DeckListView from './components/DeckListView';
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from "@react-navigation/stack";
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './reducers'
// import middleware from "./reducers/applyMiddleware";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <Provider store={createStore(reducer , middleware)}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={TabNav} />
          <Stack.Screen name="DeckListView" component={DeckListView} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function TabNav() {
  return (
    <Tab.Navigator
    initialRouteName="DeckListView"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === "DeckListView") {
            icon = (
              <Icon
              name='rowing' />
            );
          } else if (route.name === "Add Deck") {
            icon = (
              <Icon
              name='rowing' />
            );
          } 
          return icon;
        }
      })}
    >
      <Tab.Screen name="DeckListView" component={DeckListView} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
     
    </Tab.Navigator>
  );
}


