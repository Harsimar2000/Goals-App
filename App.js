import { Button, StyleSheet, Text, TextInput, View , FlatList} from 'react-native';
import { useState } from 'react';
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals,setCourseGoals] = useState([]);

  function goalInput(text){
    setEnteredGoalText(text)
  }

  function addGoal(){
    setCourseGoals(
      currrentCourseGoals => [
        ...currrentCourseGoals,
        enteredGoalText
      ]
    );    
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Course Goal' 
          style={styles.TextInput} 
          onChangeText={goalInput}
        />
        <Button title='Add goal' onPress={addGoal}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList >
            {courseGoals.map((goal) =>
              <View style={styles.goalItem} key={goal}> 
              <Text style={styles.goalText}>{goal}</Text>
            </View>)}
        </FlatList>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 19,
    flex:1,
    backgroundColor: "#ADE792"
  },

  inputContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#344D67",
    marginRight: 30,
  },

  TextInput:{
    borderWidth: 1,
    padding: 8,
    borderColor: "#ADE792",
    width: "80%",
    marginRight: 20,
    borderColor: "black",
    backgroundColor: "#6ECCAF",
  },

  goalsContainer:{
    flex: 5,
  },

  text:{
    //borderColor: "red",
    borderWidth: 1,
    marginBottom: 14,
    color: "black",
    //paddingLeft: 10,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#6ECCAF"
  },
  
  goalItem: {
    marginBottom: 14,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#5e08cc",
    color: "white",
  },

  goalText:{
    color: "white"
  }

});
