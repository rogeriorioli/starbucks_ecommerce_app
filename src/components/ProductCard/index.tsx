import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, ImageProps, TouchableOpacityProps } from "react-native";
import wish1 from '../../assets/wish1.png'
import wish0 from '../../assets/wish0.png'
import star from '../../assets/star.png'



interface Product extends TouchableOpacityProps {
    id : number,
    name : string
    descriptipon? : string,
    price : number
    images : string
    whislist : boolean  
    addToWhislist : () => void
}




export default function ProductCard({images, id, name, price, whislist, addToWhislist, ...props} : Product) {
 
    return (
        <TouchableOpacity style={styles.card} key={id} {...props}>
            <View style={styles.ratings}>
            <Image source={star} style={{ width: 15, height: 15 }} />
                <Text style={styles.cardText}>
                    4.5
                </Text>
                <Image style={styles.img} source={{ uri: images }} />
            </View>
            <View style={styles.cardesc}>
                <View style={styles.desKWrapper}>
                    <View>
                        <Text style={styles.descText}>{name}</Text>
                        <Text style={styles.cardText}>R$ {price}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonFav}  onPress={addToWhislist}>
                        {whislist ? 
                        <Image source={wish1} style={{ width: 20, height: 18 }} /> :
                        <Image source={wish0} style={{ width: 20, height: 18 }} /> }
                        
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card : {
        backgroundColor : "#225125",
        width : 200,
        height :250,
        marginTop: 60,
        borderRadius: 20,
        padding: 12,
        position : 'relative',
        marginLeft : 40,
        lastChild : {
            marginLeft : 40,
            marginRight : 40
        }
    },
    ratings : {
        flexDirection : 'row',
        alignItems : 'center',
        width : 45,
        justifyContent : 'space-between'
    },
    img :{
        width : 207,
        height : 210,
        position : 'absolute',
        top : -70,
        left : 20
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
        width: 33,
        height: 33,
        borderRadius : 100,
        justifyContent : 'center',
        alignItems : 'center',
        position: 'absolute',
        right : -20

    }

})