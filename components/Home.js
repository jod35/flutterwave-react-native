import React ,{useEffect,useState}from 'react';
import { Text, View, StyleSheet,Pressable,Image,ScrollView} from 'react-native'
import {Notifier,Easing} from 'react-native-notifier' //please install this library








const notifications_list=[
    {
        title: 'John Doe',
        description: 'lorem',
    },
    {
        title: 'John Doey',
        description: 'lorem',
    },
    {
        title: 'John Doej',
        description: 'lorem',
    },
    {
        title: 'John Doefg',
        description: 'lorem',
    }
]



const Home =({navigation})=>{
    const [notifications,setNotifications] =useState([]);

    useEffect(
       ()=>{
        setNotifications(notifications_list)
       },[]
    )


    const triggerNotifications=()=>{ //this function triggers notifications
        console.log("Hello")
    
    
        notifications.forEach(notification=>{
            Notifier.showNotification(
                {
                    title: notification.title,
                    description: notification.description,
                    duration: 0,
                    showAnimationDuration: 300,
                    showEasing: Easing.bounce,
                    // onHidden: () => console.log('Hidden'),
                    // onPress: () => console.log('Press'),
                    hideOnPress: true,
                    queueMode:"immediate"
                }
            )
        })
        
    }

  

    return(
        <View style={styles.container}>
            <View style={styles.options}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.text}>SignUp</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Flutter')}>
                    <Text style={styles.text}>Flutter</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Text style={styles.text} onPress={triggerNotifications}>
                        NOtifications    {notifications.length}
                    </Text>
                </Pressable>    

                <Pressable style={styles.button} onPress={() => navigation.navigate('Items')}>
                    <Text style={styles.text}>
                        List Items
                    </Text>
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
        top:100
    }
    
})

export default Home