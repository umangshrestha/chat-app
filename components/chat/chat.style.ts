import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: 300,
    },

    chatInput: {
        marginRight: 5,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 4,
        flexGrow: 1,
        fontSize: 18,
    },


    sendSection: {
        flexDirection: "row",
        margin: 15,
    },
})