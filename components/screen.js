

import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'


class Screen extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <TextInput placeholder="0" placeholderTextColor={'white'} style={styles.text}>{this.props.accumulator}</TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        height: "15%",
        borderColor: "#5ac6f6",
        borderRadius: 10,
        borderWidth: 2,
        margin: 20
    },

    text: {
        fontSize: 40, 
        color: "white",
        textAlign: "right",
        fontWeight: "bold",
        marginTop: 30,
        marginRight:10,
    }
})

export default Screen