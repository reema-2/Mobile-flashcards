import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {removeDeck} from '../utils/api'
import {deleteDeck} from '../actions/decks'
import { connect } from 'react-redux'


class DeckListView extends Component{

  goToCardView = (deckId)=>{
    this.props.navigation.navigate('AddCard',{deckId})
  }
  goToQuizView = (deck) =>{
    this.props.navigation.navigate('Quiz',{deck})
  }

  DeleteDeckFunction=(deckId)=>{
    removeDeck(deckId).then(() => {
      this.props.dispatch(deleteDeck(deckId));
    });

    this.props.navigation.goBack();
  }

  render(){
    const { deck } = this.props
   
    return (
      <View style={styles.container}>
        { deck &&
          <View>
            <View style={styles.deckcontener}>
              <Text style={styles.deckName}>{deck.title}</Text>
              <Text style={styles.CardNum}>{deck.questions.length} Cards</Text>
            </View>
            <TouchableOpacity style={styles.addCard} onPress={() => this.goToCardView(deck.title)}>
                <Text style={styles.buttonText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.startQuiz} onPress={() =>this.goToQuizView(deck)}>
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.removeDeck} onPress={() =>this.DeleteDeckFunction(deck.title)}>
                <Text style={styles.removeDeckText}>Remove Deck</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

function mapStateToProps (decks, { route }) {
  const  {title}  = route.params
  return {
    deck: decks[title]
  };
}

 export default connect(mapStateToProps)(DeckListView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingTop:50,
    alignItems: 'center'
 
  },
  deckcontener:{
    alignItems: 'center',
  },
  deckName:{
    fontWeight: "bold",
    fontSize: 50,
    color: '#707189',
    alignItems: 'center',
  },
  CardNum:{
    fontWeight: "bold",
    paddingTop:50,
    fontSize: 40,
    color: 'gray',
    alignItems: 'center',
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
  },
  removeDeckText:{
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
  },
  removeDeck:{
    marginTop:120,
    backgroundColor: "red",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width:300,
    alignItems: 'center',
  }


});