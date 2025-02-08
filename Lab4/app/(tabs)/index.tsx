import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";

export default function bai1() {
  type ContactType = {
    name: string;
    email: string;
    position: string;
    photo: string;
  }
  const data = [
    {
      name: "Phuong",
      email: "phuong@gmail.com",
      position: "Giam doc",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Mai",
      email: "mai@gmail.com",
      position: "Truong phong",
      photo: "https://i.pinimg.com/236x/bc/ab/b8/bcabb8fe60e80db921d8778672f96cf0.jpg",
    },
    {
      name: "Lan",
      email: "lan@gmail.com",
      position: "IT",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Linh",
      email: "linh@gmail.com",
      position: "Ke toan",
      photo: "https://i.pinimg.com/236x/bc/ab/b8/bcabb8fe60e80db921d8778672f96cf0.jpg",
    },
    {
      name: "Hoa",
      email: "hoa@gmail.com",
      position: "Nhan su",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Đào",
      email: "dao@gmail.com",
      position: "Dao tao",
      photo: "https://i.pinimg.com/236x/bc/ab/b8/bcabb8fe60e80db921d8778672f96cf0.jpg",
    },
    {
      name: "Hương",
      email: "huong@gmail.com",
      position: "Maketing",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Liên",
      email: "lien@gmail.com",
      position: "Pho giam doc",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Hiền",
      email: "hien@gmail.com",
      position: "Tester",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Thảo",
      email: "thao@gmail.com",
      position: "PO",
      photo: "https://i.pinimg.com/236x/bc/ab/b8/bcabb8fe60e80db921d8778672f96cf0.jpg",
    },
    {
      name: "Diệu",
      email: "dieu@gmail.com",
      position: "SM",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Nhi",
      email: "nhi@gmail.com",
      position: "DEV",
      photo: "https://i.pinimg.com/236x/bc/ab/b8/bcabb8fe60e80db921d8778672f96cf0.jpg",
    },
    {
      name: "Quỳnh",
      email: "quynh@gmail.com",
      position: "DEV",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
    {
      name: "Trang",
      email: "trang@gmail.com",
      position: "Nhan vien",
      photo: "https://i.pinimg.com/236x/bc/ab/b8/bcabb8fe60e80db921d8778672f96cf0.jpg",
    },
    {
      name: "Giang",
      email: "Giang@gmail.com",
      position: "Bao ve",
      photo: "https://i.pinimg.com/originals/8a/7a/07/8a7a07e87cf356c33b9f4110cf3cbdeb.jpg",
    },
  ];

const ContactItem = ({ item }: { item: ContactType }) => (

    <View style={styles.contactContainer}>

      <Image source={{ uri: item.photo }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.position}>{item.position}</Text>
      </View>
      <TouchableOpacity style={styles.callButton}>

        <Text style={styles.callText}>Call</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>

        <Text style={styles.text}>Contacts</Text>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }) => <ContactItem item={item} />}
            keyExtractor={(item) => item.email}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  container: {
    padding: 16,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text:{
    textAlign: "center", 
    fontSize: 30, 
    fontWeight: 900, 
    marginTop: 30
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    color: "gray",
  },
  callButton: {
    backgroundColor: "#ab47bc",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  callText: {
    color: "#fff",
    fontWeight: "bold",
  },
});