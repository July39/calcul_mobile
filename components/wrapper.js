

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './screen';
import Buttonbox from './buttonbox';


class Wrapper extends React.Component {

    state = {
        accumulator: null
    };

    onPress(key) {
        let accumulator = null;
        if (key === '=') {
            accumulator = eval(this.state.accumulator);
        }
        else {
            accumulator = this.state.accumulator += key;
        }
        this.setState({
            accumulator: accumulator
        });
    }

    componentDidMount() {
        this.setState({
            accumulator: ''
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Screen accumulator={this.state.accumulator}/>
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