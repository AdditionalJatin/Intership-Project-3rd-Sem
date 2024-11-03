import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView, ScrollView ,
  StatusBar
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (

    <SafeAreaView>
  
  <StatusBar
        
        backgroundColor="#CECECE" 
        hidden={false} 
      />
    <ScrollView>
      <View style={styles.firstCardView}>
        <View style={styles.container}>
          <View style={styles.firstTxtView}>
            <Text style={styles.profileTxt}>Patient Profile</Text>

            <Image
              style={styles.img}
              source={{
                uri: "https://th.bing.com/th?id=OIP.MXXcVA3-a55KwAUXCG5HAAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2",
              }}
            />

            <Text style={[styles.first]}>
              Patient Name
            </Text>

            <Text style={[styles.first]}></Text>

            <Text style={[styles.first]}>
              Registration Number
            </Text>
            <Text style={[styles.first]}>
              {" "}
              Aadhar Number
            </Text>
            <Text style={[styles.first]}>
              Phone Number
            </Text>
            <Text style={[styles.first]}>Email</Text>
            <Text style={[styles.first]}>
              Date of Birth
            </Text>

            <Text style={[ styles.first]}>
              Parent's Name{" "}
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.firstTxtView}>
            <Text style={styles.heading}> Medical Information :</Text>
            <Text style={[styles.first]}>Blood Group</Text>
            <Text style={[ styles.first]}>Sex</Text>

            <Text style={[ styles.first]}>Gender</Text>

            <Text style={[styles.first]}>
              Height (in cm)
            </Text>

            <Text style={[styles.first]}>
              Medical History
            </Text>

            <Text style={[styles.first]}>
              {" "}
              Family Medical History
            </Text>

            <Text style={[styles.first]}>
              {" "}
              Surigical History
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.firstTxtView}>
            <Text style={styles.insurHeading}>Insurance Information :</Text>

            <Text style={styles.insurprovi}>Insurance Provider</Text>

            <Text style={styles.insurprovi}>Policy Number</Text>
          </View>
        </View>

        
<View style={styles.backView}>
  
<TouchableOpacity
      style={styles.backTouch}
       >
       <Text style={styles.backText}>Back</Text>
     </TouchableOpacity>

      </View>   





      </View>
    </ScrollView>


  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  firstCardView: {
    flex: 1,

    justifyContent: "center",
    padding: wp("4%"),

    borderColor: "#A8F9FC",
    shadowColor: "#F4BBBC",
    borderRadius: 10,
  },

  heading: {
    paddingBottom: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationColor: "black",
  },

  first: {
    paddingBottom: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  insurprovi: {
    paddingBottom: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  insurHeading: {
    paddingBottom: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationColor: "black",
   
  },
  profileTxt: {
    fontSize: 32,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    paddingBottom: 25,

    textAlign: "center",
  },
  container: {
    borderWidth: 15,

    borderColor: "#AAF6F9",
    shadowRadius: 12,
    borderRadius: 10,
  },
  img: {
    margin: "auto",

    marginBottom: 27,
    height: 120,
    width: 120,
    borderRadius: 250,
    shadowRadius: 100,
    shadowColor: "#F36466",
  },
  firstTxtView: {
    borderWidth: 4,
    padding: 15,
    marginBottom: hp("1%"),
    borderColor: "#CECECE",
    shadowRadius: 12,
    borderRadius: 10,
  },
  backText:{
    textAlign:'center',
    textDecorationLine: "underline",
    textDecorationColor: "black",
     fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize:15,
  },
  backView:{
     borderWidth: 4,
     marginTop:10,
      borderColor: "#CECECE",
    shadowRadius: 12,
     borderRadius: 10,
  },
  backTouch:{},
});

export default LoginScreen;
