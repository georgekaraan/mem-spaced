import React from 'react'
import MemoryCard from '../components/MemoryCard'
import { View, StyleSheet, FlatList } from 'react-native'
import AppText from '../components/AppText'
import Screen from '../components/Screen'

import colors from '../config/colors'

const memories = [
    {
        id: 1,
        title: 'Passage from 4000 weeks and some',
        subTitle: "What the man says is what he does and yet he doesn't go away man. He keps saying it but then he doesn't",
        type: "text"
    },
    {
        id: 2,
        title: 'Funny Story - Diagonal',
        subTitle: 'it is me',
        type: "voicenote"
    }
]

export default function HomeScreen() {

  return (
    <Screen>

        <AppText style={{padding: 10, fontSize: 32}}>My Memories</AppText>
        <FlatList
            style={styles.list}
            data={memories}
            keyExtractor={mem => mem.id.toString()}
            renderItem={({item}) =>
                    <MemoryCard
                        title={item.title}
                        subTitle={item.subTitle}
                        type={item.type} />}
        />

    </Screen>
  )
}

const styles = StyleSheet.create({
    list: {
        // height: '100%',
        // backgroundColor: 'black',
        // flexGrow: 0
    }
})