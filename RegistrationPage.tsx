import { StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

import  { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

export default function RegistrationPage() {
  const [isSelected, setSelection] = useState(false);
  return (
  
      <ScrollView style={styles.Page}>

    <View style={styles.regisPage}>

     <View>
     <Text style={styles.heading}>Registration Page</Text>
     </View>
     
     

          <View style={styles.input}>
            
            <View>
            <Text style={styles.inputLabel}>Full Name</Text>
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="full name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View>
            <Text style={styles.inputLabel}>Email id</Text>
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email id"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View>
            <Text style={styles.inputLabel}>Phone Number</Text>
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Phone Number"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='DD/MM/YYYY'
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View>
            <Text style={styles.inputLabel}>Gender</Text>
            
            {/* <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               /> */}

               <View  style={styles.gendr}>
      <TouchableOpacity
        style={styles.radioButton}
      >
        <Text style={styles.inputLabel}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
      >
        <Text style={styles.inputLabel}>Female</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioButton}
      >
        <Text style={styles.inputLabel}>Other</Text>
      </TouchableOpacity>

      </View>

          </View>


          <View>
            <Text style={styles.inputLabel}>Create Username</Text>
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Username"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>

          <View>
            <Text style={styles.inputLabel}>Create Password</Text>
            
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
               />
          </View>


          </View>

          <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
              </View>
            </TouchableOpacity>
          
         


     
  
   
   
            </View>
    </ScrollView>
    

  )
}

const styles = StyleSheet.create({
Page: {

},

heading: {
fontSize: 25,
textAlign: 'center',
fontWeight: 'bold',
color: '#062029',
borderBottomColor: 'black',
borderBottomWidth: StyleSheet.hairlineWidth,
},

header1: {
backgroundColor: '#36798F',

},

regisPage: {
margin: '10%',
backgroundColor: '#AAA', 
borderColor: 'black',
borderRadius: 10, 

},
input: {
  marginBottom: 16,
  padding: '7%'
},


inputLabel: {
  fontSize: 17,
  fontWeight: '600',
  color: '#222',
  marginBottom: 8,
},


inputControl: {
  height: 50,
  backgroundColor: '#fff',
  paddingHorizontal: 16,
  borderRadius: 12,
  fontSize: 15,
  fontWeight: '500',
  color: '#222',
  borderWidth: 1,
  borderColor: '#C9D3DB',
  borderStyle: 'solid',
},
btn: {    flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth: 1,
  backgroundColor: '#075eec',
  borderColor: '#075eec',},
  

btnText: {    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',},

    radioButton: {
   
      padding: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
gendr: {
  flex:1,
  flexDirection: 'row',
 
},
  

})