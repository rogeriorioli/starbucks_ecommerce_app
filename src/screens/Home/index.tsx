import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, GestureResponderEvent, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

export default function Home({ navigation: { navigate } }: any) {
    const navigation = useNavigation()
    return (
        <>
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Header greatins="BOM DIA !" name="Carlos R Orioli" />
                <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <Text style={styles.textActive} >Populares</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => navigate('Cafe')}>

                            <Text style={styles.text}>Café</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Refrescantes</Text>
                    </View>
                </ScrollView>
            </View>
            <View>
        </View>
                <ScrollView style={styles.scrollWrapper} >
                
                    <ScrollView style={styles.scrollShelf} horizontal showsHorizontalScrollIndicator={false}>

                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                    </ScrollView>
        

                    <View>
                        <Text style={styles.title}>Melhores Ofertas</Text>
                    </View>
                    <ScrollView style={styles.scrollShelf} horizontal showsHorizontalScrollIndicator={false}>

        
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                    </ScrollView>
                    <View>
                        <Text style={styles.title}>Melhores Ofertas</Text>
                    </View>
                    <ScrollView style={styles.scrollShelf} horizontal showsHorizontalScrollIndicator={false}>

        
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />

                    </ScrollView>
        <View style={styles.clear}></View>
                </ScrollView>

        </View>
        </>
    )
}
const styles = StyleSheet.create({
    clear : {
        height : 20
    },
    wrapper: {
        backgroundColor: '#fff',
        flex : 1
    },
    container: {
        paddingLeft: 40,
        paddingTop: 40
    },
    scrollContainer: {
        paddingBottom: 40,
        marginBottom: 40
    },
    scroll: {
        height: 50,
        flexGrow: 0
    },
    scrollWrapper : {
        paddingLeft : 40,
        flexGrow: 0
    },
    scrollShelf: {
      padding : 0,

    },
    shelf: {
        flexDirection: 'row',
        height: 400,
        justifyContent : 'flex-end'
        
    },
    menu: {
        flexDirection: 'row',
        height: 50,
        marginVertical: 20
    },
    textActive: {
        color: "#225125",
        fontSize: 18,
        fontWeight: '500',
        marginRight: 10
    },
    text: {
        color: "#C4C4C4",
        fontSize: 18,
        marginRight: 10

    },
    card: {
        backgroundColor: "#225125",
        width: 200,
        height: 230,
        borderRadius: 20,
        padding: 12,
        marginRight: 36,
        position: 'relative'
    },
    img: {
        width: 207,
        height: 207,
        position: 'absolute',
        top: -70,
        left: 15
    },
    cardesc: {
        width: '100%',
        flex: 1,
        position: "absolute",
        bottom: 0,
        padding: 12,
        flexDirection: 'row'

    },
    desKWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        position: "relative"
    },
    descText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: '600',
        flex: 1
    },
    cardText: {
        color: "#fff",
        fontSize: 18

    },
    title: {
        color: '#225125',
        fontSize: 25,
        fontWeight: "800",
        marginTop: 40,

    },
    buttonFav: {
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -20

    }



});