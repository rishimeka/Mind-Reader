import {useState} from "react";
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";

const MonthlyGoals = ({navigation}) => {
    function create(){
        navigation.navigate("AddMonthlyGoal")
    }
    return (
        <SafeAreaView style={styles.safe_view_container}>
            <View style={styles.home_container}>
            <Text style={styles.home_header}>Monthly Goals</Text>
            <Pressable
                    style={styles.add_button}
                    onPressOut={() => create()}><Text style={styles.login_button_text}>  +  </Text></Pressable>
            </View>
        </SafeAreaView>
    );
}
export default MonthlyGoals;
