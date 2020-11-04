import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs/';

import {
	View,
	Text,
	Button
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


class Pages1Screen extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Pages1Screen</Text>
			</View>
		)
	}
}

class Pages2Screen extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Pages2Screen</Text>
			</View>
		)
	}
}

class Pages3Screen extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Pages3Screen</Text>
			</View>
		)
	}
}

class Pages4Screen extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Pages4Screen</Text>
			</View>
		)
	}
}

const bottomNavigator = createBottomTabNavigator(
	{
		page1: {
			screen: Pages1Screen,
			navigationOptions: {
				tabBarLabel: 'web',
				tabBarIcon: (tintColor, focused) => (
					<Icon name={'index'} size={24} style={{color: tintColor}}/>
				)
			}
		},
		page2: {
			screen: Pages2Screen,
			navigationOptions: {
				tabBarLabel: 'vue',
				tabBarIcon: (tintColor, focused) => (
					<Icon name={'mail'} size={24} style={{color: tintColor}}/>
				)
			}
		},
		page3: {
			screen: Pages3Screen,
			navigationOptions: {
				tabBarLabel: 'java',
				tabBarIcon: (tintColor, focused) => (
					<Icon name={'star'} size={24} style={{color: tintColor}}/>
				)
			}
		},
		page4: {
			screen: Pages4Screen,
			navigationOptions: {
				tabBarLabel: 'python',
				tabBarIcon: (tintColor, focused) => (
					<Icon name={'user'} size={24} style={{color: tintColor}}/>
				),
			},
		}
	},
	{
		//         // andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
		backBehavior: 'none',
		initialRouteName: 'page4', //设置首次加载的页面默认
		tabBarOptions: {
			labelStyle: {
				fontSize: 16,
			},
			//设置tab激活时文字和图标(前提是tabBarIcon的style设置tintColor)颜色
			activeTintColor: '#fd742f',
			//设置tab未激活文字和图标(前提是tabBarIcon的style设置tintColor)颜色
			inactiveTintColor: '#000000',
			//设置tab激活时候背景颜色
			activeBackgroundColor:'#e0dce0',
		},
	}
);

const bottomAppContainer = createAppContainer(bottomNavigator);

export default bottomAppContainer;
