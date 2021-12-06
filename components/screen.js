

import React from 'react'
import { StyleSheet, View } from 'react-native'


class Screen extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: 80,
        justifyContent: 'center',
        borderColor: "#0f0",
        borderRadius: 5,
        borderWidth: 1
    }
})

export default Screen