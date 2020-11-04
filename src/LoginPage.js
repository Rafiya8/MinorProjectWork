import React, {Component} from 'react';
import {TextInput, Button, View, TouchableOpacity} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

export class LoginPage extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.textfields}>
                    <TextInput style={styles.input}
                        placeholder = "username"
                        returnType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TextInput style={styles.input}
                        placeholder = "password"
                        returnType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttontext}> Login </Text>
                    </TouchableOpacity>
                    <Button
                        title = "Register here"
                        color = "#1bc9c"
                        onPress = {() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        );
    }
}

export default class App extends Component{
    render(){
        return(
            <AppStackNavigator />
        );
    }
}


const AppStackNavigator = createStackNavigator ({
    Login: LoginPage,
    Register : RegisterPage,
    Home : HomePage
});

const styles = {
    container: {
        padding : 20,
        flex : 1,
        backgroundColor : '#ecf0f1',
        justifyContent : 'center',
        alignItems : 'center'
    },
    input : {
        paddingLeft : 20,
        borderRadius : 50,
        height : 50,
        fontSize : 25,
        backgroundColor : 'white',
        borderColor : '#1abc9c',
        borderWidth : 1,
        marginBottom : 20,
        color : '#34495e'
    },
    buttoncontainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '1abc9c',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttontext : {
        textAlign : 'center',
        color : '#ecf0f1',
        fontSize : 20
    }
}






