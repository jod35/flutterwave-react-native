import React from 'react';
import {
Text,
View,
StyleSheet
} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import NavigationContainer from '@react-navigation/native'
import ScreenA from './screens/ScreenA'
import ScreenB from './screens/ScreenB'



const drawer = createDrawerNavigator();

const Drawer=()=>{


    return (
        <View style={styles.container}>
            <NavigationContainer>
                <drawer.Navigator>
                    {/* <drawer.Screen name="Home" children={this.renderScreenComponents}/> */}
                    <drawer.Screen name="ScreenA" component={ScreenA} />
                    <drawer.Screen name="ScreenB" component={ScreenB} />
                </drawer.Navigator>
            </NavigationContainer>
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

export default Drawer