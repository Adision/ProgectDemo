/**
 * Created by Apple on 2017/11/15.
 */
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

export default class PFind extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    <Text style={{fontSize:20}}>{"发现"}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navStyle:{
        height:64,
        paddingTop:25,
        backgroundColor:'orange',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(1,1,1,1)'
    }
});