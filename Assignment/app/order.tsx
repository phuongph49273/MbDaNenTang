import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const orders = [
  {
    id: "1",
    date: "20th March 16:23",
    total: 74.40,
    items: [
      {
        id: "101",
        name: "Cappuccino",
        description: "With Steamed Milk",
        image: "https://via.placeholder.com/150",
        price: 37.20,
        details: [
          { size: "S", price: 4.20, quantity: 2 },
          { size: "M", price: 6.20, quantity: 2 },
          { size: "L", price: 8.20, quantity: 2 },
        ],
      },
    ],
  },
  {
    id: "2",
    date: "19th March 2023",
    total: 74.40,
    items: [
      {
        id: "102",
        name: "Liberica Beans",
        description: "From Africa",
        image: "https://via.placeholder.com/150",
        price: 37.20,
        details: [
          { size: "250gm", price: 4.20, quantity: 2 },
          { size: "500gm", price: 6.20, quantity: 2 },
          { size: "1kg", price: 8.20, quantity: 2 },
        ],
      },
    ],
  },
];

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderDate}>Order Date: {item.date}</Text>
              <Text style={styles.orderTotal}>Total Amount: ${item.total.toFixed(2)}</Text>
            </View>

            {item.items.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productDescription}>{product.description}</Text>
                  <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                </View>
              </View>
            ))}

            {item.items.map((product) =>
              product.details.map((detail, index) => (
                <View key={index} style={styles.itemRow}>
                  <Text style={styles.itemSize}>{detail.size}</Text>
                  <Text style={styles.itemPrice}>${detail.price.toFixed(2)}</Text>
                  <Text style={styles.itemQuantity}>x {detail.quantity}</Text>
                  <Text style={styles.itemTotal}>
                    ${(detail.price * detail.quantity).toFixed(2)}
                  </Text>
                </View>
              ))
            )}
          </View>
        )}
      />

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414", padding: 15 },
orderCard: { backgroundColor: "#1E1E1E", borderRadius: 10, padding: 10, marginBottom: 15 },
  orderHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  orderDate: { color: "#ccc", fontSize: 14 },
  orderTotal: { color: "#FFA500", fontSize: 14, fontWeight: "bold" },
  productCard: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  productImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  productInfo: { flex: 1 },
  productName: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  productDescription: { color: "#aaa", fontSize: 14 },
  productPrice: { color: "#FFA500", fontSize: 16, fontWeight: "bold" },
  itemRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 3 },
  itemSize: { color: "#ccc", fontSize: 14 },
  itemPrice: { color: "#fff", fontSize: 14 },
  itemQuantity: { color: "#FFA500", fontSize: 14 },
  itemTotal: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  downloadButton: {
    backgroundColor: "#FFA500",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  downloadText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default OrderHistoryScreen;