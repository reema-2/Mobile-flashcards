import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { handleGetAllDecks } from '../actions/decks'
class DeckListView extends Component {
 
  constructor(props) {
    super(props);
    this.state={
      decks:[]
    }; 
  }
  componentDidMount() {
   // this.props.dispatch(handleGetAllDecks())
   getDecks().then((value) => this.setState({decks: value}))
  } 

  goToDeckView = (deck) =>{
   this.props.navigation.navigate('Deck',{deck})
  }

  render(){
    const { decks } = this.props;
    console.log(this.state.decks)
    return (
      <View style={styles.container}>
        <ScrollView>
          { Object.values(this.state.decks).map(deck => (
          <TouchableOpacity key={deck.title} style={styles.buttonContainer}  onPress={ () => this.goToDeckView(deck)} >
              <Text style={styles.deckText}>{deck.title}</Text>
              <Text style={styles.cardText}>{deck.questions.length}</Text>
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
} 

export default DeckListView
// function mapStateToProps({ decks }) {
//   return {
//     decks
//   };
// }
// export default connect(mapStateToProps)(DeckListView)

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
    height: 100,
    width: 250,
    margin: 10,
    backgroundColor: "#e9dfd9",
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
