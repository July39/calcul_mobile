// Components/Bouton.js
// Utilisation des propriétés

import React from 'react'
import { View, Button } from 'react-native'

class Bouton extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <Button title={this.props.titre} onPress={() => {this.props.onPress()}} />
            </View>
        )
    }
}

export default Bouton;