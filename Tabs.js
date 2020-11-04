import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator } from 'react-navigation-tabs';

import {
	View,
	Text
} from 'react-native'

/**
 * tabs 依赖
 * 连接图标到android
 * yarn add react-navigation-tabs react-native-vector-icons
 * react-native link react-native-vector-icons
 */

/**
 * tabs导航
 * @type {NavigationNavigator<any, NavigationProp<NavigationState>>}
 */


class Pages1Screen extends Component{
	render() {
		return(
			<View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
				<Text>Pages1Screen</Text>
			</View>
		)
	}
}

class Pages2Screen extends Component{
	render() {
		return(
			<View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
				<Text>Pages2Screen</Text>
			</View>
		)
	}
}

class Pages3Screen extends Component{
	render() {
		return(
			<View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
				<Text>Pages3Screen</Text>
			</View>
		)
	}
}

class Pages4Screen extends Component{
	render() {
		return(
			<View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
				<Text>Pages4Screen</Text>
			</View>
		)
	}
}

const TabNavigator = createMaterialTopTabNavigator(
	{
		page1:{
			screen: Pages1Screen,
			navigationOptions  :{
				tabBarLabel: 'web'
			}
		},
		page2:{
			screen: Pages2Screen,
			navigationOptions  :{
				tabBarLabel: 'vue'
			}
		},
		page3:{
			screen: Pages3Screen,
			navigationOptions  :{
				tabBarLabel: 'java'
			}
		},
		page4:{
			screen: Pages4Screen,
			navigationOptions  :{
				tabBarLabel: 'python'
			}
		}
	},
	{
		tabBarOptions:{
			style: {
				minWidth: 60,
				backgroundColor: 'green'
			},
			scrollEnabled: true,
			indicatorStyle:{
				height: 1,
				backgroundColor: '#fffffff'
			},
			labelStyle:{
				fontSize: 14,
				marginLeft: 7
			},
			upperCaseLabel: true
		}
	}
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
