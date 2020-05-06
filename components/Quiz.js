import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Quiz extends Component {

  state={
    numCorrectAnswe:0,
    numIncorrectAnswe:0,
    index:0,
    viewQues: true,
    showAnswer: false
  }

  correctAnswe = (deckQuesLength1) =>{
    let x = deckQuesLength1 -1
    this.setState({
      numCorrectAnswe: this.state.numCorrectAnswe + 1
     })
     if(x > this.state.index){
      this.setState({
        index: this.state.index + 1
       })
    }else{
      this.setState({
        viewQues: false
       })
    }
  }

  incorrectAnswe = (deckQuesLength) =>{
    let x = deckQuesLength -1
    this.setState({
       numIncorrectAnswe: this.state.numIncorrectAnswe + 1
      })
    if(x > this.state.index){
      this.setState({
        index: this.state.index + 1
       })
    }else{
      this.setState({
        viewQues: false
       })
    }
  }

  goToBack = () =>{
    this.props.navigation.goBack();
   }

   startQuiz =() =>{
    this.setState({
      numCorrectAnswe:0,
      numIncorrectAnswe:0,
      index:0,
      viewQues: true
     })
   }
   showAnsweQues = () => {
    this.setState({
      showAnswer:true
    })
   }
   showQues = () => {
    this.setState({
      showAnswer:false
    })
   }
  
  render(){
    const {navigation}= this.props.navigation.navigate
    const { deck } = this.props.route.params;

    return (
      <View style={styles.container}>
        { deck.questions.length != 0 
          ?<View > 
            {this.state.viewQues === true
             ? <View>
               {this.state.showAnswer === false
               ?<View>
                    <Text>{this.state.index+1}/{deck.questions.length}</Text>
                    <Text style={styles.quesText}>{deck.questions[this.state.index].question}</Text>
                    <TouchableOpacity onPress={this.showAnsweQues}>
                      <Text style={styles.answer}>Answer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.correct} onPress={ () => this.correctAnswe(deck.questions.length)}>
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrect} onPress={()=> this.incorrectAnswe(deck.questions.length)}>
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>
               </View>
               :<View>
                    <Text style={styles.quesText}>{deck.questions[this.state.index].answer}</Text>
                    <TouchableOpacity onPress={this.showQues}>
                      <Text style={styles.answer}>Question</Text>
                    </TouchableOpacity>
               </View>
              }
                </View>
            :  <View>
                  <Text>Score {this.state.numCorrectAnswe}</Text>
                  <TouchableOpacity style={styles.incorrect} onPress={this.startQuiz}>
                    <Text style={styles.buttonText}>start the Quiz</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.incorrect} onPress={this.goToBack}>
                      <Text style={styles.buttonText}>Go Back</Text>
                  </TouchableOpacity>
              </View>
            }
            </View>
          : <Text style={styles.quesText}>No Card</Text>
        }
      </View>
    );
  }
}
export default Quiz
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingTop:50,
    alignItems: 'center',
 
  },
  
  quesText:{
    fontWeight: "bold",
    fontSize: 30,
    color: '#707189'
  },
  answer:{
    marginTop:50,
    marginBottom:80,
    fontWeight: "bold",
    fontSize: 20,
    color: 'blue'
  },
  incorrect:{
    marginTop:50,
    backgroundColor: "red",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width:300,
    alignItems: 'center',
  },
  correct:{
    marginTop:20,
    backgroundColor: "green",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    width:300,
    alignItems: 'center',
  },
  buttonText:{
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
  }

});