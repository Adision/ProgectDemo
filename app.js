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

import {Actions,Scene,ActionConst,Router} from 'react-native-router-flux'
import Login from './Component/Login/Login'

import Main from './Component/PIconMain'

export default class App extends Component {
    render() {
        let AppScenes=Actions.create(
            <Scene key="root">
                <Scene key="login" component={Login} type={ActionConst.REPLACE} hideNavBar={true}/>
                <Scene key="Main" component={Main} type={ActionConst.REPLACE} hideNavBar={true} />



            </Scene>
        )
        return (
            <Router scenes={AppScenes}/>
        );
    }
}

