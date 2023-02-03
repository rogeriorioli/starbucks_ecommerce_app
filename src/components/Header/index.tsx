import { View, Text, StyleSheet } from "react-native";

type HeaderProps = {
    greatins : string
    name : string
    showBackButton? : boolean
}

export default function Header ({greatins, name, showBackButton = false} : HeaderProps) {
    return(
        <>
        <View style={styles.content}>
            {
                showBackButton &&
                <View>
                    <Text > {'<'} </Text>
                </View>
            }
            <Text style={styles.greting}>{greatins}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    content : {
        paddingVertical : 20
    },
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