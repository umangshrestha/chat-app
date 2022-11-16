

import { useEffect, useState } from "react";
import { FlatList, TextInput, View, Button } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { ChatItem } from "./chat-item/chat-item.component";
import { IChatItem } from "./chat.type";
import { io } from 'socket.io-client'
import Styles from "./chat.style";

export const Chat = () => {
    const [chatInput, setChatInput] = useState('');
    const [chatList, setChatList] = useState<IChatItem[]>([]);

    const image = useSelector((state: RootState) => state.user.image);
    const by = useSelector((state: RootState) => state.user.name);
    const url = useSelector((state: RootState) => state.server.url)
    const socket = io(url)

    useEffect(() => {
        socket.on('chat', (data) => {
            setChatList([...chatList, JSON.parse(data)])
        })
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000)
        })

        return ()=>{
            socket.close()
        }
    }, []);


    const onPress = () => {
        console.log(">>>>>>>>>>>>>>>>>")
        socket.emit('chat', JSON.stringify({
            id: Math.random().toString(36).substring(2),
            text: chatInput,
            timeStamp: new Date().getTime(),
            image,
            by
        }));
        setChatInput('');
    }

    return (
        <View style={Styles.container}>
            <FlatList
                inverted
                data={[...chatList].sort((a, b) => a.timeStamp - b.timeStamp)}
                renderItem={({ item }) => <ChatItem {...item} />}
                keyExtractor={(item) => item.id} />
            <View style={Styles.sendSection}>
                <TextInput style={Styles.chatInput} value={chatInput} onChangeText={setChatInput} />
                <Button title="Send" onPress={onPress} />
            </View>
        </View>
    );
}