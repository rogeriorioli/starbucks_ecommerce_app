import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import wish1 from '../../assets/wish1.png'
import star from '../../assets/star.png'
export default function ProductCard() {
    return (
        <View style={styles.card}>
            <View style={styles.ratings}>
            <Image source={star} style={{ width: 15, height: 15 }} />
                <Text style={styles.cardText}>
                    4.5
                </Text>
                <Image style={styles.img} source={{ uri: 'https://i.ibb.co/j5VfyBN/cafe-late.png' }} />
            </View>
            <View style={styles.cardesc}>
                <View style={styles.desKWrapper}>
                    <View>
                        <Text style={styles.descText}>Cafè Latte</Text>
                        <Text style={styles.cardText}>R$ 30</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonFav}>
                        <Image source={wish1} style={{ width: 20, height: 18 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        backgroundColor : "#225125",
        width : 200,
        height :230,
        marginTop: 60,
        borderRadius: 20,
        padding: 12,
        marginRight : 36,
        position : 'relative'
    },
    ratings : {
        flexDirection : 'row',
        alignItems : 'center',
        width : 45,
        justifyContent : 'space-between'
    },
    img :{
        width : 207,
        height: 207,
        position : 'absolute',
        top : -70,
        left : 15 
    },
    cardesc : {
        width : '100%',
        flex : 1,
        position : "absolute",
        bottom : 0,
        padding : 12,
        flexDirection: 'row'

    },
    desKWrapper : {
       justifyContent : 'space-between' ,
       flexDirection : 'row',
       alignItems :'center',
       width : '100%',
       padding :0,
       position : "relative"
    },
    descText: {
        color : "#fff",
        fontSize : 22,
        fontWeight : '600',
        flex : 1
    },
    cardText: {
        color : "#fff",
        fontSize : 18
        
    },
    title : {
        color : '#225125',
        fontSize : 25,
        fontWeight: "800",
        marginTop: 40,

    },
    buttonFav : {
        backgroundColor :"#fff",
        width: 30,
        height: 30,
        borderRadius : 100,
        justifyContent : 'center',
        alignItems : 'center',
        position: 'absolute',
        right : -20

    }

})