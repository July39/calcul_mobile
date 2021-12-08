

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './screen';
import Buttonbox from './buttonbox';


class Wrapper extends React.Component {

    state = {
        accumulator: null
    };

    onPress(key) {
        let accumulator = '';
        switch (key) {
            case 'C':
                accumulator = '';
                break;
            case '+/-':
                accumulator *= -1;
                accumulator = eval(this.state.accumulator);
                break;
            case '=':
                accumulator = eval(this.state.accumulator);
                break;
            case '<-':
                accumulator = this.state.accumulator.substring(0, this.state.accumulator.length - 1);
                break;
            default:

                accumulator = this.state.accumulator += key;
        }
        this.setState({accumulator: accumulator});
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
        borderRadius: 10,
        borderWidth: 1
    }
})

export default Wrapper