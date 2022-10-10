import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from './AppText'

export default function SingleReminderCheck({active, marked, date}) {
  return (

    <View style={[styles.row, !active && !marked && styles.disabled]}>
        {marked
        ? <AntDesign name="checkcircle" size={24} color={colors.primary} />
        : <MaterialIcons name="radio-button-unchecked" size={24} color={colors.dark} />}
        <AppText>{date.toDateString()}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: 300,
        backgroundColor: colors.tertiary,
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    disabled:{
        backgroundColor: colors.dark
    }
})