
import React from 'react';
import { StyleSheet, View } from 'react-native';


class ButtonBox extends React.Component {
    render() {
        return (
            <View style={styles.buttonBox}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonBox: {
        height: 80,
        justifyContent: 'center',
        borderColor: "#00f",
        borderRadius: 5,
        borderWidth: 1
    }
})

export default ButtonBox