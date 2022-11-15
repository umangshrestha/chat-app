import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import React, { useEffect, useState } from "react";
import { Platform, Button, Text, View, Image } from "react-native";
import { ImageSize as resize } from "./image-uploader.config";
import Styles from "./image-uploader.styles";
import { useDispatch, useSelector } from 'react-redux'
import { addImage } from "../../redux/slice";
import { RootState } from '../../redux/types';


export const ImageUploader = () => {

    const [message, setMessage] = useState("No image selected")
    const imageUri = useSelector((state: RootState) => state.user.imageUri)
    const dispatch = useDispatch()

    useEffect(() => {
        const askForPermission = async () => {
            if (Platform.OS === "web")
                return
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
                alert("Grant permission to proceed");
            }
        }
        askForPermission();
    }, []);

    const onPress = async () => {
        setMessage("uploading the image");
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
        });
        setMessage("compressing the image");

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            var resizedImage = await ImageManipulator.manipulateAsync(
                uri,
                [{ resize }],
                { base64: true }
            );
            dispatch(addImage({ uri, image: resizedImage.base64 ?? "" }))
        }
    }

    return (
        <View>
            <Button title={`${imageUri ? "Update" : "Upload"} your image`} onPress={onPress} />
            {imageUri ?
                <Image resizeMode="cover" source={{ uri: imageUri }} style={Styles.image} /> :
                <Text>{message}</Text>}
        </View>
    )
}