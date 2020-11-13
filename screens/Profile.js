import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Vivek Kumar</Text>
              <Text style={{fontSize: 15}}>0103CS181183</Text>
              <Text style={styles.info}>Lakshmi Narain College of Technology</Text>
              <Text style={styles.description}></Text>
              
              <Text style={styles.textStyle}>Total Classes held: </Text>
              <Text style={styles.textStyle1}>Number of classes attended: </Text>             
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
    color: '#325C74',
  },
  textStyle1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
    color: '#4F94CD',

  }
});
