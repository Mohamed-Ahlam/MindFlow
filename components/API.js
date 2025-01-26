import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const API = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Image source={{ uri: user.picture.large }} style={styles.image} />
          <Text style={styles.text}>
            {user.name.first} {user.name.last}
          </Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>{user.location.city}, {user.location.country}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default API;
