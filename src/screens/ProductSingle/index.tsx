import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonActions, useNavigation } from '@react-navigation/native'
import back from '../../assets/back.png'
import Reviewers, { UserReview } from './components/Reviewers'


export default function ProductSingle({navigate , route} : any) {
  const navigation = useNavigation()
  const { item } = route.params
  const {reviews} = item
  console.log(reviews)

  return (
    <SafeAreaView >
      <View style={styles.wrapper}>
        <TouchableOpacity   onPress={() => navigation.dispatch(CommonActions.goBack())}>
        <Image source={back} style={{ width: 28, height: 28 }} /> 
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
          <Image source={{uri : item?.images[1]}} style={styles.product}  />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textDescription}>{item.descriptipon}</Text>
        <View>
          <Text style={styles.textTitleReview}>Reviews</Text>
          <View style={styles.reviewersContainer}>
          {reviews.map((item :  UserReview)   =>
            <Reviewers avatar={item.avatar}/>
          )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  imageContainer : {
    alignItems: 'center',
    justifyContent : 'center'
  },
  product: {
    width: 300,
    height : 300
  },
  reviewersContainer : {
    flexDirection : 'row'
  },
  wrapper : {
    paddingHorizontal : 40
  },
  textTitle : {
    color : '#225125',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10

  },
  textDescription : {
    fontSize : 16,
    color: '#333',
    lineHeight : 19,
  },
  textTitleReview : {
    color : '#225125',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10

  },
});