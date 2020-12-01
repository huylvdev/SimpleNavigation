import React, { Component } from 'react'
import i18n from 'i18n-js';
import { View, Text } from 'react-native';

export default class TextTranslate extends Component {
    constructor() {
        super()
        this.state = {
            CustomizeText: '',
            style: {},
            isTranslate: false,
        }
    }

    render() {
        return (
            <View>
                <Text numberOfLines={this.props.numberOfLines} style={this.props.style}>
                    {i18n.t(this.props.children)}
                </Text>
            </View>
        );
    }
}