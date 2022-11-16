import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },

    smallText: {
        fontSize: 16,
        fontStyle: "italic",
    },

    img: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
        marginBottom: 2
    },

    chat: {
        fontSize: 18,
    },

    chatItem: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        paddingBottom: 7,
        marginBottom: 7,
        marginLeft: 16,
        marginRight: 16,      },
})