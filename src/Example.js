import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Stylesheet} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class Example extends Component{
    constructor(){
        super()
        this.state={
            isVisible: false,
            chosenDate: ' '
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    render(){
        return(
            <View>
                <Text style={{color: 'red', fontSize: 20}}>
                    {this.state.chosenDate}
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                    <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>Search for DateTime</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible= {this.state.isVisible}
                    onConfirm= {this.state.handlePicker}
                    onCancel= {this.state.hidePicker}
                    mode= {'datetime'}
                    is24hour= {true}
                />
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    button:{
        height: 50,
        width: 250,
        backgroundColor: '#330066',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 35,
    }
})