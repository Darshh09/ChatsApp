import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/chatRoom';

export default function ChatScreen() {
  return (
    <View >
      <ChatListItem chatroom = {ChatRooms[1]}/>
    </View>
  );
}

