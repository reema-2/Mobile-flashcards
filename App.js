import 'react-native-gesture-handler';
import React from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DeckListView from './components/DeckListView';
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from "@react-navigation/stack";
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from "./reducers/middleware";
import { setLocalNotification } from './utils/helpers'

const Stack = createStackNavigator();
const Tab =   Platform.OS === "ios"
? createBottomTabNavigator()
: createMaterialTopTabNavigator();
export default class App extends React.Component{

  componentDidMount() {
    setLocalNotification()
  }
  render(){
    return (
      <Provider store={createStore(reducer , middleware)}>
        <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Decks" component={TabNav} />
           <Stack.Screen name="DeckListView" component={DeckListView} />
           <Stack.Screen name="Deck" component={Deck} />
           <Stack.Screen name="AddCard" component={AddCard} />
           <Stack.Screen name="Quiz" component={Quiz} />
         </Stack.Navigator>
       </NavigationContainer>
      </Provider>
   )
  }
}

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
              name='list' />
            );
          } else if (route.name === "Add Deck") {
            icon = (
              <Icon
              name='add' />
            );
          } 
          return icon;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="DeckListView" component={DeckListView} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
     
    </Tab.Navigator>
  );
}


