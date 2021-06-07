import React from 'react';
import { Text, View, StyleSheet,Pressable,Image} from 'react-native'



const Home =({navigation})=>{

    return(
        <View style={styles.container}>
            <View style={styles.topText}>   
                <Image source={require('../assets/dark.png')} />
            </View>
            <View style={styles.options}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.text}>SignUp</Text>
                </Pressable>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginTop:20,
        backgroundColor: '#6C63FF',
        borderRadius:7
    },
    text:{
        color:"white",
        letterSpacing:0.25,
        fontWeight:"bold",
        fontSize:20
    },
    container:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:"space-between",
    },
    topText:{
        height:50,
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
    },
    largeText:{
        fontSize:20,
    }
    ,topTextImage:{
        width:200,
        height:300,
    },
    options:{
        top:250
    }
    
})

export default Home