

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
        height: "20%",

        borderColor: "#0f0",
        borderRadius: 10,
        borderWidth: 1,

        margin: 20
    }
})

export default Screen