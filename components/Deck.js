import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {removeDeck} from '../utils/api'
export default function DeckListView({route, navigation }) {
  const { deck } = route.params;

  goToCardView = (deckId)=>{
    navigation.navigate('AddCard',{deckId})
  }
  goToQuizView = (deck) =>{
    navigation.navigate('Quiz',{deck})
  }
  DeleteDeck=(deckId)=>{
    removeDeck(deckId)
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.deckName}>{deck.title}</Text>
      <Text style={styles.CardNum}>{deck.questions.length} Cards</Text>
     <TouchableOpacity style={styles.addCard} onPress={() => goToCardView(deck.title)}>
        <Text style={styles.buttonText}>Add Card</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.startQuiz} onPress={() =>goToQuizView(deck)}>
        <Text style={styles.buttonText}>Start Quiz</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.startQuiz} onPress={() =>DeleteDeck(deck.title)}>
        <Text style={styles.buttonText}>Remove Deck</Text>
    </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingTop:50,
    alignItems: 'center',
 
  },
  
  deckName:{
    fontWeight: "bold",
    fontSize: 50,
    color: '#707189'
  },
  CardNum:{
    fontWeight: "bold",
    paddingTop:50,
    fontSize: 40,
    color: 'gray'
  },
  addCard:{
    marginTop:50,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width:300,
    alignItems: 'center',
  },
  startQuiz:{
    marginTop:20,
    backgroundColor: "#e9dfd9",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width:300,
    alignItems: 'center',
  },
  buttonText:{
    fontWeight: "bold",
    fontSize: 20,
    color: '#707189',
  }

});