import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import AppText from '../components/AppText';
import Screen from '../components/Screen';

import colors from '../config/colors';
import Tool from '../components/Tool';


export default function BuildMemory() {

    const Item = ({ item }) => {
        return <View style={styles.tool}>{item}</View>;
      };


  return (

    <Screen>

        <AppText style={{padding: 10, fontSize: 32}}>Building Memory...</AppText>
        <AppText style={{padding: 10, fontSize: 22, textAlign: 'center'}}>Choose your tool</AppText>

        <View style={styles.toolbox}>
            <Tool onPress={()=>console.log('text baby')} icon={"text"}>Text</Tool>
            <Tool icon={"quote"}>Quote</Tool>
            <Tool icon={"image"}>Image</Tool>
            <Tool icon={"video"}>Video</Tool>
            <Tool icon={"voicenote"}>VoiceNote</Tool>
            <Tool icon={"link"}>Link</Tool>
        </View>

    </Screen>

  )
}

const styles = StyleSheet.create({

    toolbox:{
        marginHorizontal: "15%",
        // width: '80%',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',

    },
    tool: {
        minWidth: 130,
        maxWidth: 130,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        // padding: 20,
        marginBottom: "10%",
        backgroundColor: colors.tertiary,
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowRadius: 7
    }
})
