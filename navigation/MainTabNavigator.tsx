/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import CameraScreen from '../screens/CameraScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { ListViewBase } from 'react-native';
import { MaterialCommunityIcons ,AntDesign, Zocial } from '@expo/vector-icons'; 
import CallScreen from '../screens/CallScreen';
import StatusScreen from '../screens/StatusScreen';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].background,
                    tabBarStyle : {
                      backgroundColor : Colors[colorScheme].tint
                    },
                    tabBarIndicatorStyle : {backgroundColor : Colors[colorScheme].background, height : 3}
        
      }}>
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabelStyle: {fontWeight : "bold"},
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="camera-iris" size={24} color={color} />,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color={color} />,
        }}
      />
       <MainTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          tabBarLabelStyle: {fontWeight : "bold"},
          tabBarIcon: ({ color }) => <Zocial name="statusnet" size={24} color={color} />,
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={CallScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-call-outline" size={24} color={color} />,
        }}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatsStack = createStackNavigator<MainTabParamList>();

function ChatsStackNavigator() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name="Chats"
        component={ChatScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </ChatsStack.Navigator>
  );
}

const StatusStack = createStackNavigator<MainTabParamList>();

function StackStatusNavigator() {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen
        name="Status"
        component={StatusScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </StatusStack.Navigator>
  );
}
