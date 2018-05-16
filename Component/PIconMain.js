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

import PHome from './Home/PHome'
import PFind from './Find/PFind'
import PMessage from './PMessage'
import PMe from './Me/PMe'
import PIconTabBar from "./PIconTabBar";

export default class PIconMain extends Component {
    constructor(Props){
        super(Props);
        this.state={
            tabNames:['首页','发现','我的'],
            tabIconNames:['ios-home-outline','ios-book-outline','ios-contact-outline']
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
                renderTabBar={()=><PIconTabBar
                    tabNames={tabNames}
                    tabIconNames={tabIconNames}
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


