

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './screen';
import Buttonbox from './buttonbox';


class Wrapper extends React.Component {

    onPress(key) {
        alert('key');
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Screen></Screen>
                <Buttonbox onPress={(key) => { this.onPress(key) }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: "100%",
        width: "100%",
        borderColor: "red",
        borderRadius: 10,
        borderWidth: 1
    }
})

export default Wrapper