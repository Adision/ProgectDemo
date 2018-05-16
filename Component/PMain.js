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
} from 'react-native';

import Navigator from 'react-native-deprecated-custom-components'
import ScrollTableView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

import PHome from './PHome'
import PFind from './PFind'
import PMessage from './PMessage'
import PMe from './PMe'
import PTabBar from './PTabBar'

export default class PMain extends Component {
    constructor(Props){
        super(Props);
        this.state={
            tabNames:['首页','发现','我的'],
            tabIconNames:['ic_home_n','ic_home_n','ic_employee2_n'],
            tabIconSelectedImages:['ic_home_h','ic_home_h','ic_employee2_h']
        }
    }
    render() {
        let tabNames=this.state.tabNames;
        let tabIconNames=this.state.tabIconNames;
        let tabIconSelectedImages=this.state.tabIconSelectedImages;
        return (
            <ScrollTableView
                tabBarPosition="bottom"
                scrollWithoutAnimation={true}
                renderTabBar={()=><PTabBar
                    tabNames={tabNames}
                    tabIconNames={tabIconNames}
                    tabIconSelectedNames={tabIconSelectedImages}
                />}
                //锁住滚动
                locked={true}
            >
                <Navigator.Navigator
                    initialRoute={{component:PHome,params:{title:'首页'}}}
                    tabLabel="首页"
                    renderScene={(route,navigator)=>
                        <route.component nav={navigator} {...route.params}/>
                    }
                />
                <Navigator.Navigator
                    initialRoute={{component:PFind,params:{title:'发现'}}}
                    tabLabel="发现"
                    renderScene={(route,navigator)=>
                        <route.component nav={navigator} {...route.params}/>
                    }
                />
                <Navigator.Navigator
                    initialRoute={{component:PMe,params:{title:'我的'}}}
                    tabLabel="我的"
                    renderScene={(route,navigator)=>
                        <route.component nav={navigator} {...route.params}/>
                    }
                />
            </ScrollTableView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});


