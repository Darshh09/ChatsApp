import React from 'react';
import { View, Text } from 'react-native';
import { ChatRoom } from '../../types';

export type ChatListItemProps = {
    chatroom : ChatRoom
}

const ChatListItem = (props : ChatListItemProps) => {
    const {chatroom} = props;
    return( 
        <View>
            <Text>{chatroom.lastMessage.content}</Text>
        </View>)
   
}

export default ChatListItem;