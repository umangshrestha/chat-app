import { StyleSheet } from "react-native";


export default StyleSheet.create({
    nameLabel: {
        fontSize: 20,
        textAlign: "center",
    },

    nameInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 20,
    },

    title: {
        fontSize: 30,
    },
    
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        justifyContent: "space-between",    
        alignItems: "stretch",
    }
})