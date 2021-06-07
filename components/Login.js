import React from 'react'
import { View, Text,StyleSheet,TextInput,Pressable } from 'react-native'

const Login = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.largeText}>Login</Text>
            <View style={styles.formGroup}>
                <TextInput  placeholder="Email" style={styles.textInput}/>
            </View>
            <View style={styles.formGroup}>
                <TextInput placeholder="Password" style={styles.textInput}/>
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.text}>Login</Text>
                </Pressable> 
            </View>

            
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
    },
    formGroup:{
        padding:20,
        borderBottomColor:"#6C63FF",
        borderBottomWidth:2
    },
    largeText:{
        fontSize:20,
        color:"#6C63FF",
        fontWeight:"bold",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius:30,
        elevation: 3,
        marginTop: 20,
        backgroundColor: '#6C63FF',
        borderRadius: 7,
    },
    text:{
        color: "#FFF",
        fontSize:20
    },
    textInput: {
        fontSize:20,
    }


})

export default Login