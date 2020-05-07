# Mobile Flashcards Project:

This app was built as a  project for the Udacity React Nanodegree Program. The purpose of the project is to demonstrate understanding of React Native app for iOS and Android.
<br>
Mobile Flashcards is a React Native app for iOS and Android that allows users to create decks,add cards and quiz themselves.

### Technologies used:
 - React Native
 - Redux 
 - expo
 - react-navigation
 - Redux Thunk

### Useg
- yarn install
- yarn ios -- (react-native run-ios) Build the iOS App (requires a MacOS computer).
- yarn android -- (react-native run-android) Build the Android App.


### Testing
This project has been tested on iOS 11+ platform

### App Architecture
```bash
├── src/
    ├── actions/
    ├── Components
    │   ├── AddCard.js # Allow users to add a card to a specific deck.
    │   ├── AddDeck.js  #Allow users to create a deck
    │   ├── Deck.js # shows the deck
    │   ├── DeckListView.js # show all decks 
    │   └── Quiz,js # user able quiz himself
    ├── middleware/ 
    ├── reducers/ 
    ├── utils/ 
    │    ├── ip.js #this file represents a AsyncStorage and methods that let you access the data. 
    │    ├── helpers.js # Notifications setting
 
```