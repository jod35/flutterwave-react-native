import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Linking} from 'react-native';


const Flutter =()=>{
    const body = {
        "tx_ref": "hooli-tx-1920bbtytty",
        "amount": "100",
        "currency": "UGX",
        "redirect_url": "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
        "payment_options": "mobilemoney",
        "meta": {
            "consumer_id": 23,
            "consumer_mac": "92a3-912ba-1192a"
        },
        "customer": {
            "email": "jodestrevin@gmail.com",
            "phonenumber": "+256708800963",
            "name": "Ssali Jonathan"
        },
        "customizations": {
            "title": "Pied Piper Payments",
            "description": "Middleout isn't free. Pay the price",
            "logo": "https://assets.piedpiper.com/logo.png"
        }}
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'authorization':'Bearer FLWSECK_TEST-897478820e9732df7da5edd9b9a7ea18-X'
        },
        body: JSON.stringify(body)
        


    }

    const makeFlutterwavePayment =()=>{
        fetch('https://api.flutterwave.com/v3/payments',requestOptions)
        .then(response=>response.json())
        .then(data =>{
            let link=data.data.link
            console.log(link)
            Linking.openURL(link)
        })
    }


    return(

        <View style={styles.flutter}>
            <TouchableOpacity onPress={makeFlutterwavePayment}>
                <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    flutter:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    }
})


export default Flutter


console.log("Hello")