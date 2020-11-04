import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress= {() => navigation.push('Dashboard')}>
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

