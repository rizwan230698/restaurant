import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChange, onSubmit }) => {
  return (
    <View style={styles.Container}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.TextInputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    backgroundColor: "#f4f9f9",
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
