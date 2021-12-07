

import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'


/**
 * Component expects two parameters/attributes:
 * 
 * 1) this.props.onPress(this.props.text)
 * 2) this.props.text
 * 
 */

class Button extends React.Component {
    render() {
        console.log(this.props.text);
        return (
            <TouchableOpacity style={styles.button} onPress={() => {this.props.onPress(this.props.text);}}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderColor: "#321",
        borderRadius: 5,
        borderWidth: 1,
        margin: 5,
        padding: 10,
        backgroundColor: 'lightblue',
        alignItems: "center", 
        justifyContent: "center",
    },

    text: {
        fontSize: 40, 
        color: "black",
        fontWeight: "bold"
    }
})

export default Button