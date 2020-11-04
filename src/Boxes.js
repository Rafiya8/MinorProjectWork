import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  ScrollView, Dimensions,
  StyleSheet, Text, 
  View, TouchableOpacity,
  SafeAreaView
} from 'react-native';

const {height, width} = Dimensions.get("window")

const handleClick = () => {
  console.log("Handle Click");
  let data = [
    {Name: "DBMS", Description: "sql queries", TimeSlot: "12:30 - 1:30", TeacherName: 'Bhawna mam'},
    {Name: "IWT", Description: "XML", TimeSlot: "10:30 - 11:30", TeacherName: 'Gaurav Nayak'},
    {Name: "TOC", Description: "Grammar", TimeSlot: "11:45 - 12:45", TeacherName: 'Hello Bacho Sir'},
    {Name: "LINUX", Description: "Coding", TimeSlot: "2:45 - 3:45", TeacherName: 'Gaurav Nayak'}
  ]
  return (
    <ScrollView>
    {
      data.map((ele, i) => (
        <View style={{height: 180}} key={i}>
        <Text style={{lineHeight: 40, color: 'red'}}>Name Of Class: {ele.Name}</Text>
        <Text style={{lineHeight: 40}}>Description of Lecture: {ele.Description}</Text>
        <Text style={{lineHeight: 40}}>Time slot for this Lecture: {ele.TimeSlot}</Text>
        <Text style={{lineHeight: 40}}>Teacher's Name: {ele.TeacherName}</Text>
        </View>
      ))
    }
    </ScrollView>
  );
}

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
   
      <View style={{flex: 0.3}}>
        <View style={{backgroundColor: '#DCDCDC'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 60, color: 'dodgerblue'}}>Running Sessions</Text>
            <Text style={{lineHeight: 40}}>Name Of Class:     COMMUNICATIONS</Text>
            <Text style={{lineHeight: 40}}>Description of Lecture:     PPT</Text>
            <Text style={{lineHeight: 40}}>Time slot for this Lecture:     10:30-11:30</Text>
            <Text style={{lineHeight: 40}}>Teacher's Name:     SINGSONG</Text>
        </View>
      </View>
      <View style={{flex: 0.4}}>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 100, color: 'dodgerblue'}}>Upcoming Sessions</Text>
            <Text style={{lineHeight: 40, top: -40}}>Name Of Class:     COMMUNICATIONS</Text>
            <Text style={{lineHeight: 40, top: -40}}>Description of Lecture:     PPT</Text>
            <Text style={{lineHeight: 40, top: -40}}>Time slot for this Lecture:     10:30-11:30</Text>
            <Text style={{lineHeight: 40, top: -40}}>Teacher's Name:     SINGSONG</Text>
        </View>  
        <TouchableOpacity onPress={() => {
          console.log("press ho rhi hai");
          setVisible(!visible);
        }}>
          <View><Text style={{color: 'green', fontWeight: 'bold'}}>View full</Text></View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.3, marginTop: 100}}>{visible && handleClick()}</View>
      <StatusBar style="auto" />
    </SafeAreaView> 
    
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    width: width,
    height: height*0.5,
    padding: 5
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
  }
});
