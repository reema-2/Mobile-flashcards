import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {saveDeckTitle} from '../utils/api'
import { connect } from 'react-redux'
import { adddDeck } from '../actions/decks'

 class AddDeck extends Component{

  state={
    inputvalue:""
  }
  
   onChangeText = (value) =>{
    this.setState(state => ({ 
      ...state,
      inputvalue: value 
    }))
  }
  
  saveTitle =()=>{
    let deckTitle = this.state.inputvalue

     saveDeckTitle(deckTitle).then(deck => {
      this.props.dispatch(adddDeck(deck));
    });
    
    this.setState(() => ({ inputvalue: '' }));
    this.props.navigation.navigate('Deck', { title: deckTitle })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.qusText}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={value => this.onChangeText( value)}
          placeholder="Enter"
          value={this.state.inputvalue}
        />
       <TouchableOpacity style={styles.submit} onPress={this.saveTitle} disabled={ this.state.inputvalue === ''}>
          <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity> 
      </View>
    );
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}
 export default connect(mapStateToProps)(AddDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: 'center',
    paddingTop:50,
  },
  inputText:{
    height: 50,
    borderColor: 'gray', 
    borderWidth: 1,
    width:400,
    padding:5,
    borderRadius: 7,
    margin:20,
    marginTop:30,
    backgroundColor: "white",
  },
  qusText:{
    fontWeight: "bold",
    fontSize: 30,
    color: '#707189',
  },
  submit:{
    backgroundColor: "#e9dfd9",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width:300,
    alignItems: 'center',
    marginTop:30
  },
  submitText:{
    fontWeight: "bold",
    fontSize: 20,
    color: '#707189',
  }
});
