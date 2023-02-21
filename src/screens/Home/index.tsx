import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
  FlatList,
  Alert,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { products } from "../../api/api";
import { useState } from "react";
import search from "../../assets/search.png";

export default function Home({ navigation: { navigate } }: any) {
  const navigation = useNavigation();
  const [whishProcuct, setWishProduct] = useState<boolean>(false);
  const toggleWishProduct = (id: number) => {
    setWishProduct(!whishProcuct);
  };

  const getItem = (item: string) => {
    Alert.alert(item);
  };
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Header greatins="BOM DIA !" name="Carlos R Orioli" />
          <View style={styles.searchContainer}>
            <Image source={search} style={styles.searchIcon} />
            <TextInput placeholder="Pesquisar" style={styles.searchInput} />
          </View>
          <ScrollView
            style={styles.scroll}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => navigate("Home")}>
                <Text style={styles.textActive}>Populares</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate("Cafe")}>
                <Text style={styles.text}>Café</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Refrescantes</Text>
            </View>
          </ScrollView>
        </View>
        <View></View>
        <ScrollView style={styles.scrollWrapper}>
          <FlatList
            style={styles.scrollShelf}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                onPress={() => navigate("ProductSingle", { item })}
                whislist={item.whishlist}
                addToWhislist={() => toggleWishProduct(item.id)}
                id={item.id}
                name={item.name}
                price={item.price}
                images={item.images[1]}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 30 }}
          />

          <View style={styles.container}>
            <Text style={styles.title}>Melhores Ofertas</Text>
          </View>
          <FlatList
            style={styles.scrollShelf}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                whislist={item.whishlist}
                addToWhislist={() => toggleWishProduct(item.id)}
                id={item.id}
                name={item.name}
                price={item.price}
                images={item.images[1]}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 30 }}
          />

          <View style={styles.container}>
            <Text style={styles.title}>Cafés em destaque</Text>
          </View>
          <FlatList
            style={styles.scrollShelf}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                whislist={item.whishlist}
                addToWhislist={() => toggleWishProduct(item.id)}
                id={item.id}
                name={item.name}
                price={item.price}
                images={item.images[1]}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 30 }}
          />

          <View style={styles.container}>
            <Text style={styles.title}>Smoothies Refrescantes</Text>
          </View>
          <FlatList
            style={styles.scrollShelf}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                whislist={item.whishlist}
                addToWhislist={() => toggleWishProduct(item.id)}
                id={item.id}
                name={item.name}
                price={item.price}
                images={item.images[1]}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 30 }}
          />
          <View style={styles.clear}></View>
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  clear: {
    height: 20,
  },
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "#F0F0F0",
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    width: 320,
    flexDirection: `row`,
  },
  searchIcon: { width: 18, height: 18, marginRight: 10, alignSelf: "center" },
  searchInput: { height: 40, width: 270 },
  container: {
    paddingLeft: 40,
    paddingTop: 40,
  },
  scrollContainer: {
    paddingBottom: 40,
    marginBottom: 40,
  },
  scroll: {
    height: 50,
    flexGrow: 0,
  },
  scrollWrapper: {
    flexGrow: 0,
  },
  scrollShelf: {
    padding: 0,
  },
  shelf: {
    flexDirection: "row",
    height: 400,
    justifyContent: "flex-end",
  },
  menu: {
    flexDirection: "row",
    height: 50,
    marginVertical: 20,
  },
  textActive: {
    color: "#225125",
    fontSize: 18,
    fontWeight: "500",
    marginRight: 10,
  },
  text: {
    color: "#C4C4C4",
    fontSize: 18,
    marginRight: 10,
  },
  card: {
    backgroundColor: "#225125",
    width: 200,
    height: 230,
    borderRadius: 20,
    padding: 12,
    marginRight: 36,
    position: "relative",
  },
  img: {
    width: 207,
    height: 207,
    position: "absolute",
    top: -70,
    left: 15,
  },
  cardesc: {
    width: "100%",
    flex: 1,
    position: "absolute",
    bottom: 0,
    padding: 12,
    flexDirection: "row",
  },
  desKWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 0,
    position: "relative",
  },
  descText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
  },
  title: {
    color: "#225125",
    fontSize: 25,
    fontWeight: "800",
    marginTop: 40,
  },
  buttonFav: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -20,
  },
});
