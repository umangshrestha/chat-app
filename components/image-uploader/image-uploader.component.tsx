import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import React, { useEffect, useState } from "react";
import { Platform, Button, Text, View, Image } from "react-native";
import { ImageSize as resize } from "./image-uploader.config";
import Styles from "./image-uploader.styles";
import { useDispatch, useSelector } from 'react-redux'
import { addImage } from "../../redux/slice/user.slice";
import { RootState } from '../../redux/types';


export const ImageUploader = () => {

    const [message, setMessage] = useState("No image selected");
    const imageUri = useSelector((state: RootState) => state.user.imageUri);
    const dispatch = useDispatch()

    const askForPermission = async () => {
        if (Platform.OS === "web") return
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            alert("Grant permission to proceed");
        }
    }

    useEffect(() => {
        askForPermission();
    }, []);

    const uploadImage = async () => {
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

    const removeImage = async () => {
        dispatch(addImage({ uri: "", image: "" }))
    }

    return (<>
        {imageUri ? (
            <View>
                <Image resizeMode="cover" source={{ uri: imageUri }} style={Styles.image} />
                <Button title="Remove Image" onPress={removeImage} color="red" accessibilityLabel="Tap to remove image" />
            </View>
        ) : (
            <View>
                <Button title={`Upload image`} onPress={uploadImage} accessibilityLabel="Tap to upload image" />
                <Text>{message}</Text>
            </View>
        )}
    </>)
}