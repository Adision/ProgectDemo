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
    ListView,
    TouchableOpacity,
    Image,
    AlertIOS,
    Alert
} from 'react-native';

import  DetailCellView from '../DetailCellView'

export default class PHome extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1!==r2
            }),
            baseUrl:'http://api.budejie.com/api/api_open.php?a=list&c=data&type=29'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    <Text style={{fontSize:20}}>{"首页"}</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={{backgroundColor:'#dddddd',paddingTop:10}}
                />
            </View>
        );
    }

    _renderRow(rowData){
        var obj=this;
        console.log("数据11："+rowData.profile_image);
        return(
            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>obj._pushTo(obj,rowData)}
            >
                <View style={styles.cellStyle}>
                    <View style={styles.topViewStyle}>
                        <Image source={{uri:rowData.profile_image}} style={styles.leftImageStyle}/>
                        <Text style={styles.nameStyle}>{rowData.name}</Text>
                    </View>
                    <Text style={styles.textStyle}>{rowData.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    _pushTo(obj,rowData){
        //AlertIOS.alert("点击了:"+rowData.name);
        // obj.props.nav.push({
        //     component:DetailCellView,
        //     params:{
        //         title:rowData.name
        //     },
        // })
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )

    }
    //发送网络请求
    componentDidMount(){
        this._loaData();
    }
    _loaData(){
        fetch(this.state.baseUrl)
            .then((response)=>response.json())
            .then((responseJson)=>{
                var jsonData=responseJson.list;
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(jsonData)
                })
            })
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    leftImageStyle:{
        width:40 ,
        height: 40,
        borderRadius:20
    },
    cellStyle:{
        marginLeft:10,
        marginBottom:10,
        marginRight:10,
        borderBottomWidth:0.5,
        borderBottomColor:'#dddddd',
        backgroundColor:'white',
        padding:5
    },
    topViewStyle:{
        flexDirection:'row'
    },
    nameStyle:{
        height:40,
        lineHeight:30,
        paddingLeft:10,
        textAlign:'center'
    },
    textStyle:{
        paddingTop:5,
        paddingBottom:5
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