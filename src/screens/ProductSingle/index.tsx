import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions, useNavigation } from "@react-navigation/native";
import back from "../../assets/back.png";
import Reviewers, { UserReview } from "./components/Reviewers";

import AddReview from "../../assets/add.png";

import Cart from "../../assets/cart.png";
import star from "../../assets/star.png";
import { currency } from "../../helper/currency";
import Quantity from "./components/Quantity";
export default function ProductSingle({ navigate, route }: any) {
  const navigation = useNavigation();
  const { item } = route.params;
  const { reviews } = item;
  const [price, setTotalPrice] = useState<number>(item.price);
  const [quantity, setQuantity] = useState<number>(1);

  const addQuantiy = () => {
    setQuantity(quantity + 1);
    setPrice(item.price, quantity + 1);
  };

  const removeQuantiy = () => {
    setQuantity(quantity - 1);
    setPrice(item.price, quantity - 1);
  };

  const setPrice = (qtd: number, price: number) => {
    setTotalPrice(price * qtd);
  };
  return (
    <SafeAreaView>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          <Image source={back} style={{ width: 28, height: 28 }} />
        </TouchableOpacity>
        <View style={styles.ratings}>
          <Image source={star} style={{ width: 15, height: 15 }} />
          <Text style={styles.cardText}>4.5</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item?.images[1] }} style={styles.product} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textDescription}>{item.descriptipon}</Text>
        <View>
          <Text style={styles.textTitleReview}>Reviews</Text>
          <View style={styles.reviewersContainer}>
            {reviews.map((item: UserReview) => (
              <Reviewers avatar={item.avatar} key={item.user} />
            ))}
            <TouchableOpacity>
              <Image source={AddReview} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.wrapperCart}>
        <View style={{ flex: 1, flexWrap: "wrap" }}>
          <Text style={styles.textTitle}>Quantity</Text>
        </View>
        <TouchableOpacity style={styles.buttonCart}>
          <Image
            source={Cart}
            style={{ width: 26, height: 31, marginBottom: 12 }}
          />
          <Text style={styles.buttonText}>{currency(price)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quantityWrapper}>
        <Quantity
          quantity={quantity}
          increment={addQuantiy}
          decrement={removeQuantiy}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapperCart: {
    paddingHorizontal: 40,
    flexDirection: "row",
    fkex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  buttonCart: {
    backgroundColor: "#225125",
    width: 84,
    height: 124,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityWrapper: {
    flexDirection: "row",
    position: "relative",
    top: -30,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  textQuantity: {
    color: "#225125",
    fontSize: 18,
    marginHorizontal: 40,
    width: 32,
  },
  textQuantityActive: {
    color: "#225125",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 20,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  product: {
    width: 300,
    height: 300,
  },
  reviewersContainer: {
    flexDirection: "row",
  },
  wrapper: {
    paddingHorizontal: 40,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  wrapperHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 40,
  },
  textTitle: {
    color: "#225125",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  textDescription: {
    fontSize: 16,
    color: "#333",
    lineHeight: 19,
  },
  textTitleReview: {
    color: "#225125",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    width: 45,
    justifyContent: "space-between",
  },
  img: {
    width: 207,
    height: 210,
    position: "absolute",
    top: -70,
    left: 20,
  },
  cardText: {
    color: "#225125",
    fontWeight: "bold",
    fontSize: 18,
  },
});
