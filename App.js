import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/views/home/home';
import DetailScreen from './src/views/detail/detail';

/**
 * 栈导航
 * @type {NavigationNavigator<any, NavigationProp<NavigationState>>}
 */
const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Detail: DetailScreen
	},{
		initialRouteName: 'Home',
		// defaultNavigationOptions: { // 默认头部样式
		// 	headerTintColor: 'yellow',
		// 	headerStyle: {
		// 		backgroundColor: 'pink',
		// 	},
		// 	headerTitleStyle: {
		// 		textAlign: 'left'
		// 	},
		// },
	}
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
