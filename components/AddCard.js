import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import {saveCardToDeck} from '../utils/api'
import {addCardToDeck} from '../actions/decks'

class AddCard extends Component{
  constructor(props) {
    super(props);
  }
  state={
    questionValue:"",
    answerValue:""
  }

   onChangeTextQuestion = (value) =>{
    this.setState(state => ({ 
      ...state,
      questionValue: value 
    }))
  }
  onChangeTextAnswer = (value) =>{
    this.setState(state => ({ 
      ...state,
      answerValue: value 
    }))
  }
  
  Submit =(deckId) => {
    this.setState(() => ({ inputvalue: '' }));
    let card = {"answer":this.state.answerValue, "question": this.state.questionValue}

    saveCardToDeck(deckId, card).then(() => {
      this.props.dispatch(addCardToDeck(deckId, card));
    });
    
    this.props.navigation.goBack();
  }
render(){
  const { deckId } = this.props.route.params;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        onChangeText={value => this.onChangeTextQuestion(value)}
        value={this.state.questionValue}
        placeholder="Question"
      />
       <TextInput
        style={styles.inputText}
        onChangeText={value => this.onChangeTextAnswer(value)}
        value={this.state.answerValue}
        placeholder="Answer"
      />
     <TouchableOpacity style={styles.submit} disabled={ this.state.answerValue === ''} onPress={()=>this.Submit(deckId)}>
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
export default connect(mapStateToProps)(AddCard)

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
