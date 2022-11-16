import { useEffect, useState } from "react";
import { Text, Animated, Image, View } from "react-native";
import { RootState } from "../../../redux/types";
import { IChatItem } from "../chat.type";
import { AnimationConfig, UnknownImage } from "./chat-item.constant";
import { useSelector } from 'react-redux';
import Styles from "./chat-item.style";

export const ChatItem = ({ id, text, image, timeStamp, by }: IChatItem) => {
    let [animatedValue] = useState(new Animated.Value(0));
    const name = useSelector((state: RootState) => state.user.name);

    let avatarImage = image || UnknownImage;
    let meta = `${by} at ${new Date(timeStamp).toLocaleTimeString()}`
    let imageUri = { uri: "data:image/jpeg;base64," + avatarImage };

    useEffect(() => {
        Animated.timing(animatedValue, AnimationConfig).start();
    }, []);

    return (
        <Animated.View
            style={[
                Styles.chatItem,
                { borderColor: (name === by) ? "green" : "blue" },
                { opacity: animatedValue },
                { transform: [{ scale: animatedValue }] },
            ]}>
            <View>
                <View style={Styles.container}>
                    <Image source={imageUri} style={Styles.img} />
                    <Text style={Styles.smallText}>{meta}</Text>
                </View>
                <Text style={Styles.chat}>{text}</Text>
            </View>
        </Animated.View >

    )

}
