/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PIconMain from './Component/PIconMain'

export default class ProgectDemo extends Component {
    render() {
        return (
            <PIconMain/>
        );
    }
}

AppRegistry.registerComponent('ProgectDemo', () => ProgectDemo);
