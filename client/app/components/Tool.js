import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'
import { renderIcon } from '../functions/renderIcon'

export default function Tool({children, icon, onPress}) {
  return (

    <TouchableHighlight
      underlayColor={colors.dark}
      style={styles.tool}
      onPress={onPress}
      >
        <View style={styles.container}>
          {renderIcon(icon, "50")}
          <AppText style={styles.text}>{children}</AppText>
        </View>
    </TouchableHighlight>

  )
}

const styles = StyleSheet.create({
    tool: {
        minWidth: 130,
        maxWidth: 130,
        height: 130,
        justifyContent: "center",
        borderRadius: 25,
        marginBottom: "10%",
        backgroundColor: colors.tertiary,
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        shadowRadius: 7
    },
    text: {
        paddingTop: 10,
        fontWeight: '600'
    },
    container: {
      alignItems: "center",
    }
})
