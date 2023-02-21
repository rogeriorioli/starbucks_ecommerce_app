import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableOpacityProps,
  TextInput,
} from "react-native";
import arrow from "../../../../assets/arrow.png";

interface Props extends TouchableOpacityProps {
  increment: () => void;
  decrement: () => void;
  quantity: number;
}

export default function Quantity({ quantity, increment, decrement }: Props) {
  return (
    <View style={styles.quantityCounter}>
      <TouchableOpacity
        onPress={decrement}
        style={
          quantity <= 1 ? styles.buttonQuantityDisable : styles.buttonQuantity
        }
        disabled={quantity <= 1}
      >
        <Text style={styles.textQuantity}>-</Text>
      </TouchableOpacity>
      <Text style={styles.textQuantityActive}>{quantity}</Text>
      <TouchableOpacity onPress={increment} style={styles.buttonQuantity}>
        <Text style={styles.textQuantity}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quantityCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
  },
  buttonQuantity: {
    borderRadius: 15,
    backgroundColor: "#225125",
    height: 42,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonQuantityDisable: {
    borderRadius: 15,
    backgroundColor: "#225125",
    opacity: 0.2,
    height: 42,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  textQuantity: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  textQuantityActive: {
    color: "#225125",
    fontSize: 22,
    fontWeight: "bold",
    width: 32,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
