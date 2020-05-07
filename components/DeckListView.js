import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions/decks'


class DeckListView extends Component {
 
  constructor(props) {
    super(props);
  }
  componentDidMount() {

   return getDecks().then(decks => {
    this.props.dispatch(getAllDecks(decks));
  });
  
  }
 
  goToDeckView = (deck) =>{
    this.props.navigation.navigate('Deck', { title: deck })
  }

  render(){
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          { decks &&
            Object.values(decks).map(deck => (
          <TouchableOpacity key={deck.title} style={styles.buttonContainer}  onPress={ () => this.goToDeckView(deck.title)} >
              <Text style={styles.deckText}>{deck.title}</Text>
              <Text style={styles.cardText}>{deck.questions.length}</Text>
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
} 

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(DeckListView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#efefef"
  },
   buttonContainer: {
    borderBottomColor:"black",
    borderWidth: 2 ,
    padding: 10,
    borderRadius: 7,
    height: 150,
    width: 400,
    margin: 10,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckText:{
    margin: 10,
    fontWeight: "bold",
    fontSize: 30,
    color: '#707189'
  },
  cardText:{
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: 'gray'
  }
});
