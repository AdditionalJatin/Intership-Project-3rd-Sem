import { Text, View, StyleSheet, Image,TextInput,CheckBox,TouchableOpacity} from 'react-native';
import React from 'react';



export default function LogInPage() {
  return (

 <View style={styles.zeroView}>

  <View style={styles.containerView}>
                 
         
                    <Image style={styles.akgeclogo} source={require('./AkgecHealthLogo.png')} />

           

           
                     <View style={styles.headingView}>

                     <Text style={styles.firstHeading}>
                     Welcome back
                       </Text>

                        <Text style={styles.secondHeading}>
                         Please enter your details  to sign in.
                       </Text>
                         </View>








                         <View style={styles.inputView}>
                            

                            <View style={styles.firstinputView}>
                             <Text style={styles.firstInputHeading}>
                          E-Mail Address
                       </Text>
                       <TextInput style={styles.firstInputField}
                       autoCapitalize='none'
                       autoCorrect={false}
                      //  secureTextEntry={true}
                         placeholder="Enter your Email"
  placeholderTextColor={'#6D6D6A'}
  placeholderFontFamily='Sans-serif'
                       />
                            </View>
                     
                      <View style={styles.secondinputView}>
                           <Text style={styles.secondInputHeading}>
                          Password
                       </Text>
                       <TextInput style={styles.secodInputField}
                        autoCapitalize='none'
                       autoCorrect={false}
                       secureTextEntry={true}
   placeholder=" Enter Password"
    placeholderTextColor={'#6D6D6A'}
     placeholderFontFamily='Sans-serif'

                       />
                       </View>
                         </View>



<View style={styles.combineView}>

    <View style={styles.rememberMe}>

    <TouchableOpacity>
<Text style={styles.rememberMeText}>Remember Me</Text>

   </TouchableOpacity>
</View> 



<View style={styles.forgetPasswordView}>
  

<TouchableOpacity
      style={styles.forgetPasswordTouch}
       >
       <Text style={styles.forgetPasswordText} >Forget Password</Text>
     </TouchableOpacity>

      </View>   


  </View>  

 

<View style={styles.signinView}>
<TouchableOpacity style={styles.signinTouch}>
       <Text style={styles.signinText}>Sign In</Text>
     </TouchableOpacity>
  </View>



<View style={styles.lastView}>
  <View style={styles.lastheadingView}>
   <Text style={styles.lastheadingText}>Don't have an account yet? 
    </Text>
 
</View>

   <View style={styles.signupView}>
<TouchableOpacity
      style={styles.signupTouch}
       >
       <Text style={styles.signupText}> Sign up</Text>
     </TouchableOpacity>
  </View>
   </View>










            </View>  

            </View>  
  );
}


const styles = StyleSheet.create({
  
 zeroView:{
    marginTop:'40%',
  marginBottom:'40%'
 },

 containerView:{
  // //  backgroundColor:"#AAF6F9",


  


   borderRadius:30,
   borderWidth:10,
   borderColor:"#AAF6F9",
   width:'95%',
  height:'100%',
   margin:'auto',
   shadowColor:'#F4BBBC',
   shadowRadius:50,
   padding:15,
   

 },

akgeclogo:{
  height:100,
  shadowRadius:25,
  width:250,
  margin:'auto',
  borderRadius:25,
  shadowColor:'#F36466',
  marginBottom:20
},

firstHeading:{
   fontSize:30,
   fontWeight:'bold',
   fontFamily:'Sans-serif',
     paddingBottom:10,
   textAlign:'center'
   

},
secondHeading:{
    fontFamily:'Sans-serif',
    paddingBottom:15,
      fontSize:17,
       textAlign:'center',
        fontWeight:'bold',
},
 
firstInputHeading:{
    fontFamily:'Sans-serif',
    paddingBottom:4,
     
},

firstInputField:{
  
  borderColor:'black',
  borderWidth:2,
   borderRadius:5,
   padding:3
 

},
secondInputHeading:{
   fontFamily:'Sans-serif',
   paddingBottom:3,
    
},
secodInputField:{
borderColor:'black',
 borderWidth:2,
   borderRadius:5,
   padding:5,

},
firstinputView:{
   marginBottom:20,
},
secondinputView:{
    marginBottom:20,
},
rememberMe:{
 flexDirection:'row',

},

 combineView:{
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
 
 },
 rememberMeText:{
  
     textDecorationLine:'underline',
  fontFamily:'Sans-serif',
  
//    paddingLeft:2,

 },
forgetPasswordView:{

  flexDirection:'row-reverse'
  
},

forgetPasswordText:{
  
  fontFamily:'Sans-serif',
  textDecorationLine:'underline',
  
  
  
},
signinView:{
    
  marginTop:20,
  
  backgroundColor:'#28B8BD',
   width:270,
  marginBottom:20,
  heigth:20,
  borderRadius:3,
  padding:5,
  margin:'auto',
   shadowRadius:5,



},

signinText:{
 fontFamily:'Sans-serif',
 textAlign:'center',
 color:'#342EDE'

},

lastheadingText:{
    
 fontFamily:'Sans-serif',
},
signupText:{
   fontFamily:'Sans-serif',
  textDecorationLine:'underline',
 color:'#342EDE'


},
lastView:{
 flexDirection:'row',
 alignSelf:'center',
 
  
 
},




});
