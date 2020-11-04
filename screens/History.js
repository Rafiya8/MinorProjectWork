import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>History</Text>
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

