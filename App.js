import { StatusBar } from 'expo-status-bar';
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {styles} from "./Styles/Styles";
import Username_Icon from "./assets/Username_Icon.png"
import Password_Icon from "./assets/Password_Icon.png"
export default function App() {
  return (
    <SafeAreaView style={styles.safe_view_container}>
        <View style={styles.login_container}>
            <Text style={styles.header_text}>Sign in</Text>
            <Text style={styles.subheader_text}>Hi there, nice to see you again</Text>
            <View style={styles.text_input_box}>
                <Image source={Username_Icon} style={styles.text_input_icons}/>
                <TextInput style={styles.text_input_text} placeholder={"User Name"}></TextInput>
            </View>
            <View style={styles.text_input_box}>
                <Image source={Password_Icon} style={styles.text_input_icons}/>
                <TextInput style={styles.text_input_text} secureTextEntry={true} placeholder={"Password"}></TextInput>
            </View>
            <Pressable style={styles.forgot_password_button}><Text style={styles.forgot_password_button_text}>Forgot Password?</Text></Pressable>
            <Pressable style={styles.login_button} ><Text style={styles.login_button_text}>Sign in</Text></Pressable>
            <Pressable style={styles.new_user_signup_button}><Text style={styles.subheader_text}>New user? </Text><Text style={styles.new_user_signup_button_text}>Sign up</Text></Pressable>
        </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

