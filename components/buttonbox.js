
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './button'


class ButtonBox extends React.Component {

    render() {
        return (
            <View style={styles.buttonBox}>
                <View style={styles.topButtonRow}>
                    <Button text="C" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="<-" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="+-" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="+" onPress={(key) => { this.props.onPress(key) }}/>
                </View>                    
                <View style={styles.buttonRow}>
                    <Button text="7" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="8" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="9" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="/" onPress={(key) => { this.props.onPress(key) }}/>
                </View>
                <View style={styles.buttonRow}>
                    <Button text="4" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="5" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="6" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="*" onPress={(key) => { this.props.onPress(key) }}/>
                </View>
                <View style={styles.buttonRow}>
                    <Button text="1" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="2" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="3" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="-" onPress={(key) => { this.props.onPress(key) }}/>
                </View>
                <View style={styles.bottomButtonRow}>
                    <Button text="0" onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="." onPress={(key) => { this.props.onPress(key) }}/>
                    <Button text="=" onPress={(key) => { this.props.onPress(key) }}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    buttonBox: {
        flex: 1,

        borderColor: "#5ac6f6",
        borderWidth: 2,
        borderRadius: 10,

        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },

    buttonRow: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        
        marginLeft: 5,
        marginRight: 5
    },

    topButtonRow: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },

    bottomButtonRow: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    }

})

export default ButtonBox