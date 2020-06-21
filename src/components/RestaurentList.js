import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import RestaurentItem from './RestaurentItem';

const RestaurentList = ({ title, restaurents }) => {
  if (!restaurents.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurents}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <RestaurentItem
            item={item}
            index={index === restaurents.length - 1 && index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f9f9',
  },
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurentList;
