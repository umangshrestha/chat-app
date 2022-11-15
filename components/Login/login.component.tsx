import React, { useState } from "react";
import { TextInput, Text, Button, View } from "react-native";
import { ImageUploader } from "../ImageUploader";
import Styles from "./login.style";
import { useDispatch, useSelector } from 'react-redux'
import { addImage, addUser } from "../../redux/slice";
import { RootState } from '../../redux/types';

export const Login = () => {
    const user = useSelector((state: RootState) => state.user.name)
    const dispatch = useDispatch()

    return (
        <View style={Styles.container}>
            <h1> Welcome to Chat App!!!</h1>
            <View>
                <Text style={Styles.nameLabel}>Please enter your name</Text>
                <TextInput style={Styles.nameInput} onChangeText={ user => dispatch(addUser(user))}  value={user}/>
            </View>
            <ImageUploader onImageChange={image => dispatch(addImage(image))} />  
            <Button title="Start Chatting" onPress={() => { }} />
        </View>
    )
}
