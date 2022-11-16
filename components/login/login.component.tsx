import React from "react";
import { TextInput, Text, Button, View } from "react-native";
import { ImageUploader } from "../image-uploader";
import Styles from "./login.style";
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from "../../redux/slice/user.slice";
import { addUrl } from "../../redux/slice/server.slice";
import { RootState } from '../../redux/types';
import { IProp } from "./login.type";

export const Login = ({ onPush }: IProp) => {
    const user = useSelector((state: RootState) => state.user.name)
    const url = useSelector((state: RootState) => state.server.url)
    const dispatch = useDispatch()

    const onPushHandler = () => {
        if (!user) return alert("Please enter a name")
        if (!url) return alert("Please enter a server url")
        onPush()
    }
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}> Welcome to Chat App!!!</Text>
            <View>
                <Text style={Styles.nameLabel}>Please enter your name</Text>
                <TextInput style={Styles.nameInput} onChangeText={user => dispatch(addUser(user))} value={user} />
            </View>
            <View>
                <Text style={Styles.nameLabel}>Please enter server</Text>
                <TextInput style={Styles.nameInput} onChangeText={user => dispatch(addUrl(user))} value={url} />
            </View>
            <ImageUploader />
            <Button title="Start Chatting" onPress={onPushHandler} accessibilityLabel="Tap to start chatting" />
        </View>
    )
}
