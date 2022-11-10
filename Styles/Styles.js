import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    safe_view_container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#1A181B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login_container: {
        width: Dimensions.get("screen").width*0.8,
        justifyContent: "center",
        //alignItems: "center"
    },
    header_text: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 32,
    },
    subheader_text: {
        color: 'white',
        fontWeight: "normal",
        fontSize: 16,
    },
    text_input_box: {
        backgroundColor: 'white',
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: "row",
    },
    text_input_text:{
        color: 'black',
        fontSize: 16,
        fontWeight: "normal",
        alignSelf: "center",
        margin: 10,
        flexDirection: "row",
        overflow: "hidden",
        maxWidth: 250,
        width: 250,
    },
    text_input_icons: {
        width: 35,
        height: 35,
        alignSelf: "center",
        margin: 10
    },
    login_button: {
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 30,
        borderRadius: 15,
        backgroundColor: "#B084CC",
        justifyContent: "center",
        alignItems: "center"
    },
    login_button_text: {
        color: 'white',
        fontWeight: "700",
        fontSize: 24,
    },
    forgot_password_button: {
        alignSelf: "flex-end",
        marginTop: 10,
    },
    forgot_password_button_text: {
        color: '#B084CC',
        fontWeight: "normal",
        fontSize: 14,
        textDecorationLine: "underline",
    },
    new_user_signup_button: {
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
    },
    new_user_signup_button_text: {
        color: '#B084CC',
        fontWeight: "normal",
        fontSize: 16,
        textDecorationLine: "underline",
    }

});