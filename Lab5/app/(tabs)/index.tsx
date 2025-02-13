import React from "react";
import {  StyleSheet, Text, View, Image } from "react-native";

export default function Bai1 (){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Cuối tuần ở Hà Nội, phố phường nhộn nhịp hơn hẳn.  
      Quán cà phê ven đường chật kín người, ai cũng muốn tìm cho mình một góc nhỏ để thư giãn.  
      Tiếng chuông xe đạp leng keng, hòa vào tiếng rao hàng rong, tạo nên một bản giao hưởng rất riêng của phố cổ.</Text>
      <Text style={styles.text2}>Cuối tuần ở Hà Nội, phố phường nhộn nhịp hơn hẳn.  
      Quán cà phê ven đường chật kín người, ai cũng muốn tìm cho mình một góc nhỏ để thư giãn.  
      Tiếng chuông xe đạp leng keng, hòa vào tiếng rao hàng rong, tạo nên một bản giao hưởng rất riêng của phố cổ.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: 'Pacifico',
    fontSize: 20,
    width: 350
  },
  text2: {
    fontFamily: 'Pacifico Regular',
    fontSize: 20,
    width: 350,
    fontStyle: "italic"
  }
})