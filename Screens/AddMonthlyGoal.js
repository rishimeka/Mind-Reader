import {useState} from "react";
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";

const AddMonthlyGoal = () => {
    return (
        <SafeAreaView style={styles.safe_view_container}>
            <View style={styles.goal_container}>
            <Text style={styles.add_header}>Add Monthly Goal</Text>
            <Text style={styles.addsubheader_text}>Goal Name</Text>
            <View style={styles.addtext_input_box}>
            <TextInput
                        style={styles.text_input_text}
                        keyboardType="email-address"
                        returnKeyType="done"
                        onChangeText={(goalInputValue) => setUserName(goalInputValue)}
                        placeholder={"Goal Name"}/>
            </View>
            </View>
        </SafeAreaView>
    );
}
export default AddMonthlyGoal;
