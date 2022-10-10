import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { renderIcon } from '../functions/renderIcon';

import colors from '../config/colors'
import AppText from './AppText'

export default function MemoryCard({title, subTitle, type}) {

  return (
    <View style={styles.card}>
        <AppText num={1} style={styles.title}>{title}</AppText>
        <View style={styles.content}>
            <View style={styles.cardImage}>
                {renderIcon(type, "50%")}
            </View>
            <View style={styles.cardDesc}>
                <AppText num={3} style={styles.subTitle}>{subTitle}</AppText>
                <Text onPress={()=> console.log('hi')} style={styles.more}>More</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.tertiary,
        marginBottom: 20,
        marginHorizontal: 10,
        padding: 10,
        height: 150,
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowRadius: 7
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: '70%'
    },
    cardImage: {
        flex: 1,
        alignSelf: 'center'
    },
    cardDesc:{
        flex: 4,
        paddingRight: 5,
    },
    title: {
        fontSize: 24,
        color: colors.light,
        fontWeight: '600',
        paddingHorizontal: 10
    },
    subTitle:{
        flexWrap: 'wrap',
        fontSize: 18,
        fontStyle: 'italic',
        color: colors.light

    },
    more: {
        position: 'absolute',
        bottom: -20,
        right: 5,
        color: colors.secondary
    }
})
