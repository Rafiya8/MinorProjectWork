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
    <ScrollView style={{backgroundColor: '#101820ff'}}>
    {
      data.map((ele, i) => (
        <View style={{height: 180}} key={i}>
        <Text style={{lineHeight: 40, color: 'white'}}>Name Of Class:        {ele.Name}</Text>
        <Text style={{lineHeight: 40, color: '#f2aa4cff'}}>Description of Lecture:       {ele.Description}</Text>
        <Text style={{lineHeight: 40, color: '#f2aa4cff'}}>Time slot for this Lecture:       {ele.TimeSlot}</Text>
        <Text style={{lineHeight: 40, color: '#f2aa4cff'}}>Teacher's Name:      {ele.TeacherName}</Text>
        <Text style={{color: '#ffd700'}}>-----------------------------------------------------------------------------------------</Text>
        </View>
      ))
    }
    </ScrollView>
  );
}
// state = {visible : false, text : 'view full'}
export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('View Full');
  return (
    <ScrollView style={styles.container}>
   
      <View style={{flex: 0.3, marginBottom: 20, marginTop: 20}}>
        <View style={{backgroundColor: '#e2d810', borderRadius: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 30, color: 'black', padding: 10, left: 80}}>Running Sessions</Text>
            <Text style={{lineHeight: 30}}>   Name Of Class:     COMMUNICATIONS</Text>
            <Text style={{lineHeight: 30}}>   Description of Lecture:     PPT</Text>
            <Text style={{lineHeight: 30}}>   Time slot for this Lecture:     10:30-11:30</Text>
            <Text style={{lineHeight: 30}}>   Teacher's Name:     SINGSONG</Text>
        </View>
      </View>
      <View style={{flex: 0.3}}>
        <View style={{backgroundColor: '#00BFFF', borderRadius: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 100, color: 'black', top: -30, left: 90}}>Upcoming Sessions</Text>
            <Text style={{lineHeight: 30, top: -48}}>   Name Of Class:     COMMUNICATIONS</Text>
            <Text style={{lineHeight: 30, top: -48}}>   Description of Lecture:     PPT</Text>
            <Text style={{lineHeight: 30, top: -48}}>   Time slot for this Lecture:     10:30-11:30</Text>
            <Text style={{lineHeight: 30, top: -48}}>   Teacher's Name:     SINGSONG</Text>
        </View>  
        <TouchableOpacity onPress={() => {
          console.log("press ho rhi hai");
          const t = text == 'View Full' ? 'View Less' : 'View Full';
          setVisible(!visible);
          setText(t);
        }}>
          <View><Text style={{color: '#CF000F', fontWeight: 'bold', left: 300}}>{text}</Text></View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.4, marginTop: 60}}>{visible && handleClick()}</View>
      <StatusBar style="auto" />
    </ScrollView> 
    
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
