import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, FlatList } from "react-native";

const Community = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10"); // Fetch 10 users
      const data = await response.json();
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
      <View>
        <Text style={styles.text}>
          {item.name.first} {item.name.last}
        </Text>
        <Text style={styles.text}>{item.email}</Text>
        <Text style={styles.text}>
          {item.location.city}, {item.location.country}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList                 // basically takes each item on the list and now u can display them however u want in the renderUser func u made
        data={users}
        keyExtractor={(item) => item.login.uuid} // Unique key for each user
        renderItem={renderUser}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 10,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Community;
