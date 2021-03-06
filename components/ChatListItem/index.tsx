import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";


export type ChatListItemProps = {
    chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props;
    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text>{moment(chatRoom.lastMessage.createdAt).format('MM/DD/YYYY')}</Text>
        </View>
    );
};

export default ChatListItem;
