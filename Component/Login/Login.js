/**
 * Created by Apple on 2017/6/6.
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
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux'


let width=Dimensions.get('window').width;

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }
    loginAction(){
        if(this.state.username.length<=0){
            alert("用户名不能为空!");
            return;
        }
        if(this.state.password.length<=0){
            alert("密码不能为空!");
            return;
        }
        Actions.Main({'theme':"登录成功"});
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('../../images/1.jpg')} style={styles.iconStyle}/>
                {/*//账号密码*/}
                <TextInput
                    placeholder={'请输入账号'}
                    style={styles.textInputStyle}
                    onChangeText={(username)=>this.setState({username})}
                />
                <TextInput
                    placeholder={'请输入密码'}
                    password="true"
                    style={styles.textInputStyle}
                    onChangeText={(password)=>this.setState({password})}
                />
                {/*//登录*/}
                <TouchableOpacity
                    onPress={this.loginAction.bind(this)}
                >
                    <View style={styles.loginButtonStyle}>
                        <Text style={{color:'white'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                {/*//设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登录?</Text>
                    <Text>注册用户</Text>
                </View>
                {/*//第三方登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式</Text>
                    <Image source={require('../../images/2.jpg')} style={styles.otherImageStyle}/>
                    <Image source={require('../../images/3.jpg')} style={styles.otherImageStyle}/>
                    <Image source={require('../../images/4.jpg')} style={styles.otherImageStyle}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle:{
        width:80,
        height:80,
        marginTop:100,
        borderRadius:40,
        borderWidth:2,
        borderColor:'orange',
        marginBottom:30
    },
    textInputStyle:{
        backgroundColor:'lightgray',
        width:width,
        height:44,
        marginBottom:1,
        textAlign:'center'
    },
    loginButtonStyle:{
        height:40,
        width:width*0.8,
        backgroundColor:'orange',
        marginTop:30,
        marginBottom:10,
        //垂直方向居中
        justifyContent:'center',
        //水平方向居中
        alignItems:'center',
        borderRadius:5
    },
    settingStyle:{
        //纵向转横向
        flexDirection:'row',
        width:width*0.8,
        //两端对齐
        justifyContent:'space-between',
        marginBottom:30
    },
    otherLoginStyle:{
        //纵向转横向
        flexDirection:'row',
        alignItems:'center',
        //绝对定位：子绝父相
        position:'absolute',
        bottom:10,
        left:20
    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:10
    }
});

//输出一个类
// module.exports=Login;
