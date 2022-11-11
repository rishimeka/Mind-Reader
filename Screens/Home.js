import {useState} from "react";
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";

const Home = () => {
    return (
        <SafeAreaView style={styles.safe_view_container}>
            <View style={styles.home_container}>
            </View>
        </SafeAreaView>
    );
}
export default Home;
