import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({ saldo, gastos}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: "5%",
    paddingEnd: "5%",
    marginTop: -20,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color:'#DADADA'
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color:'#DADADA',
    fontSize: 16,
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    fontWeight: "bold",
    color:'#2ecc71'
  },
  expenses:{
    fontSize: 22,
    fontWeight: "bold",
    color:'#e74c3c'
  } 
});
