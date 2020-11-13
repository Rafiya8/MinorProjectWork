import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');

const currentDate = (minus=0) => {

    const date = new Date();
    //dd-mm-yyyy
    return `${date.getDate()-minus}-${date.getMonth()+1}-${date.getFullYear()}`;
}

const DATA = [
    {
    date: currentDate(),
    subjects: [
            {
                subName: 'dbms', subStatus: 'present'
            },
            {
                subName: 'dbms', subStatus: 'present'
            },
            {
                subName: 'dbms', subStatus: 'present'
            },
            {
                subName: 'dbms', subStatus: 'present'
            },
            {
                subName: 'dbms', subStatus: 'present'
            }
        ]
    },
    {
        date: currentDate(1),
        subjects: [
                {
                    subName: 'dbms', subStatus: 'present'
                },
                {
                    subName: 'dbms', subStatus: 'present'
                },
                {
                    subName: 'dbms', subStatus: 'present'
                },
                {
                    subName: 'dbms', subStatus: 'present'
                },
                {
                    subName: 'dbms', subStatus: 'present'
                }
            ]
        },
        {
            date: currentDate(2),
            subjects: [
                    {
                        subName: 'dbms', subStatus: 'present'
                    },
                    {
                        subName: 'dbms', subStatus: 'present'
                    },
                    {
                        subName: 'dbms', subStatus: 'present'
                    },
                    {
                        subName: 'dbms', subStatus: 'present'
                    },
                    {
                        subName: 'dbms', subStatus: 'present'
                    }
                ]
            },
            {
                date: currentDate(3),
                subjects: [
                        {
                            subName: 'dbms', subStatus: 'present'
                        },
                        {
                            subName: 'dbms', subStatus: 'present'
                        },
                        {
                            subName: 'dbms', subStatus: 'present'
                        },
                        {
                            subName: 'dbms', subStatus: 'present'
                        },
                        {
                            subName: 'dbms', subStatus: 'present'
                        }
                    ]
                },
                {
                    date: currentDate(4),
                    subjects: [
                            {
                                subName: 'dbms', subStatus: 'present'
                            },
                            {
                                subName: 'dbms', subStatus: 'present'
                            },
                            {
                                subName: 'dbms', subStatus: 'present'
                            },
                            {
                                subName: 'dbms', subStatus: 'present'
                            },
                            {
                                subName: 'dbms', subStatus: 'present'
                            }
                        ]
                    },
                                            
]


export default ({navigation}) => {
    const [date, setDate] = useState(currentDate());
    const renderDate = () => {
        return(
            
            <DatePicker 
                date = {date} 
                mode = 'date' 
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2019"
                maxDate= {currentDate()}
                confirmBtnText="OK"
                cancelBtnText="Cancel"
                onDateChange={(d) => {setDate(d)}}
            />
        )
    }

    const renderAlert = (d) => {
        let searchData = {}
        DATA.forEach(data => {
            if(data.date == d)
                searchData = data
        })
        let s = '';
        searchData.subjects.forEach(subject => {
            s += `\t\t${subject.subName.toUpperCase()}                              ${subject.subStatus}\n\n`;
        })
        return (
            Alert.alert(
                d,
                s,
                [
                    {
                        text: 'OK',
                        onPress: () => {}
                    }
                ],
                {cancelable: false}
            )
        )
    }

    return(
        <ScrollView style={styles.container}>
            
            <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: width*0.6}}>
                {renderDate()}
                <TouchableOpacity onPress={() => {renderAlert(date)}}>
                    <FontAwesome name='search' size={32} color='black' />
                </TouchableOpacity>
            </View>
                {
                    DATA.slice(0, 10).map(data => <View style={styles.box}>
                        <Text style={styles.boxDate}>{data.date}</Text>
                        {
                            data.subjects.slice(0, 3).map(subject => <View>
                                <Text style={styles.subjects}>{subject.subName}</Text>
                                <Text style={styles.status}>{subject.subStatus}</Text>
                                </View>)
                        }
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity style={styles.viewFull} onPress = {() => {
                                renderAlert(data.date)
                            }}>
                                <Text style={{color: 'white'}}>View Full</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)
                }
                
                
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonContainer: {
        marginTop:20,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
        
    },
    box: {
        width: 270, 
        height: 200,
        backgroundColor: '#86E2D5',
        borderRadius: 45,
        marginTop: 30
    },
    boxDate: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    subjects: {
        marginLeft: 20,
    },
    status: {
        marginRight: 20,
        textAlign: 'right',
        top: -20,
    },
    viewFull: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        borderRadius:150,
        backgroundColor: "#1BA39C",
    }
}) 

