import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, GestureResponderEvent} from "react-native";
import { useNavigation } from '@react-navigation/native';

import Header from "../../components/Header";

export default function Cafe({navigation : { navigate }} : any ) {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Header greatins="BOM DIA !" name="Carlos R Orioli" /> 
        <ScrollView style={styles.scroll} horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigate('Home')}>
                <Text  style={styles.text}>Populares</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigate('Cafe')}>

            <Text style={styles.textActive}>Café</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Refrescantes</Text>
            </View>
        </ScrollView>
        <ScrollView style={styles.scrollShelf} horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.shelf}>
            <View style={styles.card}>
            
            </View>
            <View style={styles.card}>
            
            </View>
            </View>  
        </ScrollView>
        </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingTop: 40
    },
    scroll : {
        height : 50,
        flexGrow:0
    },
    scrollShelf : {
        height : 292,
        flexGrow:0
    },
    shelf : {
        flexDirection : 'row',
        alignItems: "flex-end"
    },
    menu : {
        flexDirection : 'row',
        height : 50,
        marginVertical: 20
    },
    textActive : {
        color : "#225125",
        fontSize : 18,
        fontWeight: '500',
        marginRight : 10
    },
    text : {
        color : "#C4C4C4",
        fontSize: 18,
        marginRight : 10
    
    }, 
    card : {
        backgroundColor : "#225125",
        width : 200,
        height :230,
        borderRadius: 20,
        padding: 12,
        marginRight : 36

    }
    
  });