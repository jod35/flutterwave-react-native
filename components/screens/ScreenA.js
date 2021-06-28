import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native'



const ScreenA =()=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Screen B
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding:20
    },
    text: {
        padding:20
    }
})


export default ScreenA

