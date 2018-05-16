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
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {Actions} from 'react-native-router-flux'

export default class PMe extends Component {
    exitAction(){
        Actions.login()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    <Text style={{fontSize:20}}>{"我的"}</Text>
                </View>
                <TouchableOpacity
                    style={styles.exitTouchStyle}
                    onPress={this.exitAction}
                >
                    <View style={styles.exitViewStyle}>
                        <Text style={styles.exitButtonStyle}>退出登录</Text>
                    </View>
                </TouchableOpacity>
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
    },
    exitTouchStyle:{
        alignItems:'center',
        marginTop:300,
    },
    exitViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF7256',
        width:Dimensions.get('window').width-40,
        height:35,
        borderRadius:5,
    },
    exitButtonStyle:{


    }
});