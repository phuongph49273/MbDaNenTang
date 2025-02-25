import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
  Modal,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoffeeBeans from "./coffeebeans"
const Tab = createBottomTabNavigator();
const ICONS_MENU = {
    Coffe: "https://cdn-icons-png.flaticon.com/512/2935/2935413.png", 
    CoffeeBeans: "https://cdn-icons-png.flaticon.com/512/2843/2843882.png",
    Settings: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png", 
  };
const API_URL = "http://10.24.50.228:3000/product";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

const AdminProductScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrEditProduct = async () => {
    if (!name || !description || !price || !image) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      const method = editingProduct ? "PUT" : "POST";
      const url = editingProduct ? `${API_URL}/${editingProduct.id}` : API_URL;
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      if (response.ok) {
        fetchProducts();
        closeModal();
      } else {
        Alert.alert("Lỗi", "Không thể cập nhật sản phẩm.");
      }
    } catch (error) {
      console.error("Lỗi khi lưu sản phẩm:", error);
      Alert.alert("Lỗi", "Đã xảy ra lỗi.");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (response.ok) {
        Alert.alert("Thành công", "Sản phẩm đã được xóa!", [
          { text: "OK", onPress: () => fetchProducts() }
        ]);
      } else {
        Alert.alert("Lỗi", "Không thể xóa sản phẩm.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      Alert.alert("Lỗi", "Đã xảy ra lỗi.");
    }
  };

  const openModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image);
    } else {
      setEditingProduct(null);
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingProduct(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lý sản phẩm</Text>

      <TouchableOpacity style={styles.addButton} onPress={() => openModal()}>
        <Text style={styles.buttonText}>+ Thêm sản phẩm</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productText}>{item.name} - {item.price}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity style={styles.editButton} onPress={() => openModal(item)}>
                    <Text style={styles.buttonText}>Sửa</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteProduct(item.id)}>
                    <Text style={styles.buttonText}>Xóa</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {/* 🟢 Modal nhập sản phẩm */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}</Text>

            <TextInput style={styles.input} placeholder="Tên sản phẩm" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Mô tả" value={description} onChangeText={setDescription} />
            <TextInput style={styles.input} placeholder="Giá" value={price} onChangeText={setPrice} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="URL hình ảnh" value={image} onChangeText={setImage} />

            <TouchableOpacity style={styles.button} onPress={handleAddOrEditProduct}>
              <Text style={styles.buttonText}>{editingProduct ? "Cập nhật" : "Thêm"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const Admin = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6C22',
        tabBarLabelStyle: {flexDirection: 'row'}
      }}
      >
      <Tab.Screen 
        name = "Coffee"
        component={AdminProductScreen}
        options={{
          tabBarIcon: props => RenderIcon(ICONS_MENU.Coffe, props),
          tabBarLabel: props => RenderLabal(props)
        }}
      />
      <Tab.Screen 
        name = "Coffee beans"
        component={CoffeeBeans}
        options={{
          tabBarIcon: props => RenderIcon(ICONS_MENU.CoffeeBeans, props),
          tabBarLabel: props => RenderLabal(props)
        }}
      />
      <Tab.Screen 
        name = "Setting"
        component={Setting}
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
  icon: string,
  props: {
    focused: boolean,
    color: string,
    size: number
}) => (
    <Image source={{uri: icon}} tintColor={props.color} height={16} width={16}/>
)

const Setting = () => {
  const logout = () => {
        try {
          Alert.alert('Thông báo', 'Bạn muốn đăng xuất', [
            {
              text: 'Không',
              style: 'cancel',
            },
    
            {
              text: 'Có',
              onPress: () => {
                router.push("/login" )
              },
            },
          ]);
        } catch (error) {
          Alert.alert("error");
        }
      };
  return(
      <View style={{flex: 1}}>
          <View style={{marginTop:40}}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: "center"}}>Setting</Text>
              <View style={{ borderBottomWidth: 1, borderBottomColor: "gray", marginVertical: 10 }} />
              <View style={styles.bgr}>
                  <View style={styles.bgr1}>
                  <Image style={styles.img} source={require('../assets/images/logout.png')} />
                      <TouchableOpacity onPress={logout}>
                          <Text style={styles.txt}>Log out</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  addButton: { 
    backgroundColor: "green", 
    padding: 10, 
    borderRadius: 5, 
    alignItems: "center", 
    marginBottom: 10 
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
  productItem: { 
    flexDirection: "row", 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: "#ddd", 
    alignItems: "center" 
  },
  productImage: { 
    width: 50, 
    height: 50, 
    marginRight: 10, 
    borderRadius: 5 
  },
  productInfo: { 
    flex: 1 
  },
  productText: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  productDescription: { 
    color: "gray" 
  },
  buttonGroup: { 
    flexDirection: "row", 
    marginTop: 5 
  },
  editButton: { 
    backgroundColor: "blue", 
    padding: 5, 
    borderRadius: 5, 
    marginRight: 5 
  },
  deleteButton: { 
    backgroundColor: "red", 
    padding: 5, 
    borderRadius: 5 
  },
  modalContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "rgba(0,0,0,0.5)" 
  },
  modalContent: { 
    width: "80%", 
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 10, 
    alignItems: "center" 
  },
  modalTitle: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  input: { 
    width: "100%", 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5 
  },
  button: { 
    backgroundColor: "green", 
    padding: 10, 
    borderRadius: 5, 
    alignItems: "center", 
    width: "100%", 
    marginBottom: 5 
  },
  cancelButton: { 
    backgroundColor: "gray", 
    padding: 10, 
    borderRadius: 5, 
    alignItems: "center", 
    width: "100%" 
  },
  labal: { 
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    },
    bgr: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between',
      },
      bgr1: {
        flexDirection: 'row',
        marginLeft: 20,
      },
      txt: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
      },
      img: {
        height: 30,
        width: 30,
        marginRight: 30,
      },
});

export default Admin;
