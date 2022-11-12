import {useState} from "react";
import {Alert, Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";
import Close from "../assets/Close.png"
import Username_Icon from "../assets/Username_Icon.png";
import Checkbox from "expo-checkbox";
import ExpoCheckbox from "expo-checkbox";

const AddMonthlyGoal = () => {
    const [monthlyGoalName, setMonthlyGoalName] = useState()
    const [monthlyGoalDeadLine, setMonthlyGoalDeadLine] = useState()
    const [goalDescription, setGoalDescription] = useState()
    const createTwoButtonAlert = () =>
        Alert.alert('Monthly Goal Created Successfully', monthlyGoalName + ' has been added to your monthly goals set for ' + monthlyGoalDeadLine + '!' , [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    return (
        <SafeAreaView style={styles.safe_view_container}>
           <View style={styles.add_goal}>
               <View style={styles.header_text_add_monthly_goals_with_close_button}>
                   <Text style={styles.header_text_add_monthly_goals}>Add Monthly Goal</Text>
                   <Pressable style={styles.close_button}><Text style={styles.header_text_add_monthly_goals}>X</Text></Pressable>
               </View>
               <Text style={styles.add_goal_text_box_header}>Goal Name</Text>
               <TextInput
                   style={styles.add_goal_text_input}
                   placeholder={"Goal Name"}
                   onChangeText={(userInputValue) => setMonthlyGoalName(userInputValue)}/>
               <Text style={styles.add_goal_text_box_header}>Goal Deadline</Text>
               <TextInput
                   style={styles.add_goal_text_input}
                   placeholder={"Goal Deadline"}
                   onChangeText={(userInputValue) => setMonthlyGoalDeadLine(userInputValue)}/>
               <Text style={styles.add_goal_text_box_header}>Goal Description</Text>
               <TextInput
                   style={styles.add_goal_text_input_description}
                   placeholder={"Enter monthly goal description"}
                   multiline={true}
                   numberOfLines={5}
                   onChangeText={(userInputValue) => setGoalDescription(userInputValue)}/>
               <View style={styles.text_with_checkbox}>
                   <Checkbox style={styles.checkbox}/>
                   <Text style={styles.checkbox_text}>Remind Me</Text>
               </View>
               <Pressable style={styles.add_goal_button_goal_creation} onPressOut={() => createTwoButtonAlert()}><Text style={styles.login_button_text}>Add Goal</Text></Pressable>
           </View>
        </SafeAreaView>
    );
}
export default AddMonthlyGoal;
