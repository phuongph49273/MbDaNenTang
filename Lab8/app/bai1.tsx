import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, ImageSourcePropType  } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const ICONS_MENU = {
  Home: require('@/assets/images/home.png'),
  Contacts: require('@/assets/images/contact.png'),
  Chat: require('@/assets/images/chat.png'),
  Settings: require('@/assets/images/setting.png'),
};

const Bai1 = () => {
  
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6C22',
        tabBarLabelStyle: {flexDirection: 'row'}
      }}
      >
      <Tab.Screen 
        name = "Home"
        component={Home}
        options={{
          tabBarIcon: props => RenderIcon(ICONS_MENU.Home, props),
          tabBarLabel: props => RenderLabal(props)
        }}
      />
      <Tab.Screen 
        name = "Contact"
        component={ContactsScreen}
        options={{
          tabBarIcon: props => RenderIcon(ICONS_MENU.Contacts, props),
          tabBarLabel: props => RenderLabal(props)
        }}
      />
      <Tab.Screen 
        name = "Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: props => RenderIcon(ICONS_MENU.Chat, props),
          tabBarLabel: props => RenderLabal(props)
        }}
      />
      <Tab.Screen 
        name = "Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: props => RenderIcon(ICONS_MENU.Settings, props),
          tabBarLabel: props => RenderLabal(props)
        }}
      />
    </Tab.Navigator>
  );
}

const RenderLabal = ( props: {
  focused: boolean,
  color: string,
  children: string
}) => 
  props.focused ? (
    <Text style={[styles.labal,{color: props.color}]}>{props.children}</Text>
):null;

const RenderIcon = ( 
  icon: ImageSourcePropType,
  props: {
    focused: boolean,
    color: string,
    size: number
}) => (
    <Image source={ icon} style={{
        width: 24, 
        height: 24, 
        tintColor: props.focused ? props.color : "#888"
      }}
      resizeMode="contain"
    />
)

const Home = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Màn hình Trang Chủ</Text>
    </SafeAreaView>
  );
};

const ContactsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Màn hình Bài viết</Text>
  </SafeAreaView>
);

const ChatScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Màn hình Tin nhắn</Text>
  </SafeAreaView>
);

const SettingScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Màn hình Cài đặt</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 16 
    },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10 
    },
  labal: { 
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    },
});

export default Bai1;