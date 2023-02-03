import { Image, TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'

export type UserReview = {
  avatar : string
  user? : string
  stars? : number
}

export default function Reviewers({avatar, user, stars } : UserReview) {
  return (
    <TouchableOpacity style={styles.avatarImage}>
      <Image source={{uri : avatar}} style={styles.avatarImage} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  avatarImage : {
    marginRight : 10,
    height: 40,
    width: 40
  }
})