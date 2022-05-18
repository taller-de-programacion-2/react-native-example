import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Grid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Titulo</Text>
      </View>
      <View style={styles.flexExample}>
        <View style={[styles.columnOne, styles.center]}>
          <Text style={{ color: "white" }}>Columna 1</Text>
        </View>
        <View style={[styles.columnTwo, styles.center]}>
          <Text style={{ color: "white" }}>Columna 2</Text>
        </View>
      </View>
      <View style={styles.justifyExample}>
        <View style={[styles.center, styles.justifyColumn]}>
          <Text>Columna con justify</Text>
        </View>
        <View style={[styles.center, styles.justifyColumn]}>
          <Text>Columna con justify 2</Text>
        </View>
      </View>
      <View style={styles.alignExample}>
        <View style={[styles.center, styles.alignColumn]}>
          <Text>Columna con align</Text>
        </View>
        <View style={[styles.center, styles.alignColumn]}>
          <Text>Columna con align 2</Text>
        </View>
        <View style={[styles.center, styles.alignColumn, styles.withAlignSelf]}>
          <Text>Columna con align 3</Text>
        </View>
      </View>
      <View style={styles.wrapExample}>
        <View style={[styles.center, styles.wrapColumn]}>
          <Text>Columna con wrap</Text>
        </View>
        <View style={[styles.center, styles.wrapColumn]}>
          <Text>Columna con wrap 2</Text>
        </View>
        <View style={[styles.center, styles.wrapColumn]}>
          <Text>Columna con wrap 3</Text>
        </View>
      </View>
    </View>
  );
};

const wrappingStrategy = "wrap";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    border: "1px black solid",
    width: 900,
  },
  titleWrapper: {
    height: 80,
    backgroundColor: "rgb(84 ,140, 210)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "white",
  },
  flexExample: {
    height: 160,
    backgroundColor: "rgb(84, 190, 102)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  columnOne: {
    backgroundColor: "blue",
    flex: 2,
    height: "100%",
  },
  columnTwo: {
    flex: 1,
  },
  justifyExample: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8
  },
  justifyColumn: {
    width: "25%",
    border: "1px black solid",
    backgroundColor: "orange",
  },
  alignExample: {
    height: 250,
    alignItems: "center",
    flexDirection: "row",
    gap: 24,
    borderTopWidth: 2,
    borderTopColor: "black",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    padding: 8
  },
  alignColumn: {
    backgroundColor: "gray",
    flex: 1,
    border: "1px black solid",
  },
  withAlignSelf: {
    alignSelf: "flex-end",
  },
  wrapExample: {
    flexDirection: "row",
    flexWrap: wrappingStrategy,
    padding: 8,
    gap: 8
  },
  wrapColumn: {
    width: 300,
    backgroundColor: "lime",
    paddingTop: 8,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
