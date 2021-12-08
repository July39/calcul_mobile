

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


class Screen extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>{this.props.accumulator}</Text>
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
    },

    text: {
        fontSize: 30, 
        color: "white",
        fontWeight: "bold"
    }
})

export default Screen