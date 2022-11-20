import { View, Text, StyleSheet } from "react-native";

type HeaderProps = {
    greatins : string
    name : string
}

export default function Header ({greatins, name} : HeaderProps) {
    return(
        <>
        <View>
            <Text style={styles.greting}>{greatins}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    greting : {
        color : "#CACACA",
        fontSize: 18,
        textTransform :'capitalize'
    },
    name :  {
        color : '#225125',
        fontSize: 22,
        fontWeight: '600'
    }
  });