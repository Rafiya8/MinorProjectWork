import React, {Component} from 'react';
import {TextInput, Button, View, TouchableOpacity} from 'react-native';
import {createStackNavigator } from 'react-navigation';

export default class RegisterPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.registerform}>
                    <TextInput style = {styles.input}
                        placeholder = "Enter your name"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.emailinput.focus()}
                    />
                    <TextInput style = {styles.input}
                        placeholder = "Enter your name"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect ={false}
                        ref = {(input) => this.emailinput = input}
                    />
                    <TextInput style = {styles.input}
                        placeholder = "Enter password"
                        returnKeyType = "go"
                        secureTextEntry 
                        ref = {() => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttontext}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}