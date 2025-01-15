import {  Image, Platform } from 'react-native';

import React,{useState} from "react";
import { Button,ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const handleClear = () => {
    setName('');      
    setPassword('');   
  };
  return(
    <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textView}>ĐĂNG NHẬP</Text>
          <TextInput value={name} onChangeText={setName} placeholder="Nhập họ tên" style={styles.tipStyle} />
          <TextInput value={password} onChangeText={setPassword} placeholder="Nhập mật khẩu" secureTextEntry={true} style={styles.tipStyle}/>
          <Button title="Đăng Nhập"  onPress={handleClear}/>
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: 700,
    width: 400,
    alignSelf: 'center',
    marginTop: 80,
  },
  textView : {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold'
  },
  tipStyle: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }
});