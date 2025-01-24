import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native";

const Mood = () => {
    const moodList = [
      { id: 1, mood: "Happy", pic: require("../assets/images/happy.jpg") },
      { id: 2, mood: "Focus", pic: require("../assets/images/focus.jpg") },
      { id: 3, mood: "Angry", pic: require("../assets/images/focusmood.jpg") },
      { id: 4, mood: "Relax", pic: require("../assets/images/relax.jpg") },
      { id: 5, mood: "Calm", pic: require("../assets/images/calm.jpg") },
    ];

    const renderMoodList = ({item}) => {
        return (
          <TouchableOpacity>
            <View style={styles.mood}>
              <Image source={item.pic} style={{ width: 59.2, height: 62.06, borderRadius: 10 }} />
              <Text>{item.mood}</Text>
            </View>
          </TouchableOpacity>
        );
    }
    
    return (
      <View style={styles.moodContainer}>
        <FlatList
          data={moodList}
          renderItem={renderMoodList}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={true}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  moodContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 14,
    paddingLeft: 0,
    paddingRight: 0,
  },
  mood: {
    padding: 13,
    paddingTop: 0,
    paddingLeft: 0,
    display: "flex",
    alignItems: "center",
    paddingRight: 30,
  },
});

export default Mood;