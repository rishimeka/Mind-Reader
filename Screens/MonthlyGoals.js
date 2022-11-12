import {useState} from "react";
import {Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";
import Checkbox from 'expo-checkbox';

const MonthlyGoals = ({navigation}) => {
    const listOfMonthlyGoals = ["Pay all bills on time", "Complete home project", "Paint room", "Workout Everyday"]

    function create() {
        navigation.navigate("AddMonthlyGoal")
    }

    return (
        <SafeAreaView style={styles.safe_view_container_monthly_goals}>
            <Text style={styles.header_text_monthly_goals}>Monthly Goals</Text>
            <View style={styles.monthly_goals_list_view}>
                {listOfMonthlyGoals.map((goal) => (
                    <View style={styles.monthly_goals_view}>
                        <Text style={styles.monthly_goal_text}>{goal}</Text>
                    </View>))}
            </View>
            <Pressable style={styles.add_goal_button} onPressOut={() => create()}><Text style={styles.login_button_text}>Add Goal</Text></Pressable>
            <Pressable style={styles.calendar_button}><Text style={styles.login_button_text}>Calendar</Text></Pressable>
        </SafeAreaView>
    );
}
export default MonthlyGoals;
