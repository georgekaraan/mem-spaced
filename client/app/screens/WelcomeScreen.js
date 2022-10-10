import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, SafeAreaView, Button, Platform, StatusBar, TouchableHighlight } from 'react-native';
import AppButton from '../components/AppButton';

// import colors from '../config/colors';
import AppText from '../components/AppText';


function WelcomeScreen(props) {


      return (
        <ImageBackground style={styles.bg_image}  source={{uri: "https://res.cloudinary.com/dg8xjejgr/image/upload/v1665155112/07_kpyew8.jpg"}} resizeMode="cover" >
          <View style={styles.logoContainer}>
          <Image source={require('../assets/mem-spaced.png')} style={styles.logo} />
          <AppText fontSize={20}>building memories</AppText>
          </View>
          <AppButton title="Login" color="tertiary" onPress={()=> console.log('heheee')}/>
          <View style={{height: 10}}></View>
          <AppButton title="Register"/>
          <View style={{height: 50}}></View>
        </ImageBackground>
      )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    bg_image: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    logo: {
      width: "100%",
      height: 200,
    },
    logoContainer: {
      width: '100%',
      position: "absolute",
      top: 100,
      alignItems: 'center'
    }
  });