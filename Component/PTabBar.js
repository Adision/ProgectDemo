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
    Image,
    PixelRatio
} from 'react-native';

export default class PTabBar extends Component {
    static propTypes={
        goToPage:React.PropTypes.func,//跳转到tab的方法
        activeTab:React.PropTypes.number,//被选中的下标
        tabs:React.PropTypes.array,//tabs的集合，像oc items的数组

        //扩展自定义属性
        tabIconNames:React.PropTypes.array,//Item图片的名称
        tabNames:React.PropTypes.array,//保存图片的名称
         tabIconSelectedNames:React.PropTypes.array,//保存被选中图片的集合
    }
    render() {
        return (
            <View style={styles.tabsStyle}>
                {this.props.tabs.map((tab,i)=>this._renderItem(tab,i))}
            </View>
        );
    }
    _renderItem(tab,i){
        const color=this.props.activeTab == i?"orange":"gray";
        const currentImages=this.props.activeTab == i ? this.props.tabIconSelectedNames:this.props.tabIconNames;
        return(
            <TouchableOpacity
                onPress={()=>this.props.goToPage(i)}
                key={i}
                style={styles.tab}
                activeOpacity={1}
            >
                <View style={styles.tabItem}>
                    <Image
                        source={{url:currentImages[i],scale:PixelRatio.get()}}
                        style={{width:30,height:30}}
                    />
                    <Text style={{color:color}}>{this.props.tabNames[i]}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tabsStyle:{
        flexDirection:'row',
        height:50
    },
    tabItem:{
        alignItems:'center'
    },
    tab:{
        flex:1
    }
});