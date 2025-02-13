import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from "react-native";

export default function Bai2() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'rgba(0, 0, 0, 0)'} />
      <ImageBackground
        style={styles.background}
        source={require('@/assets/images/backgroud.jpg')}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Discover world with us</Text>
          <Text style={styles.subtitle}>
          Hà Nội vào thu, bầu trời trong xanh, không khí mát mẻ dễ chịu.  
          Những con đường ngập tràn lá vàng rơi, tạo nên một khung cảnh thơ mộng.  
          Người dân thong dong dạo phố, tận hưởng những ngày đẹp nhất trong năm.  
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%' ,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    padding: 20,
    borderRadius: 10,
    
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    width: 220
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'left',
    marginBottom: 20,
    width: 300
  },
  button: {
    backgroundColor: '#fbbc32',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
