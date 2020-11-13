import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';


const clearRoute = (navigation, route) => {navigation.dispatch(
    CommonActions.reset({
        index: 0,
        routes: [{name: route}]
    })
)}

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress= {() => {
                navigation.navigate('Dashboard');
                clearRoute(navigation, 'Dashboard');              
            }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
}) 

