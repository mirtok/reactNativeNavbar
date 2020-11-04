import React,{Component} from 'react';

import {
    View,
	Text,
	Button,
	StyleSheet
} from 'react-native'

class Home extends Component{
	static navigationOptions = {
		title: '主页',
		headerTintColor: '#ff0000',
		headerStyle: {
			backgroundColor: 'pink',
		},
		headerTitleStyle:{
			fontWeight: 'bold',
			fontSize: 20
		}
	};
	render() {
		const data = {NAME: '我是Home', ID: Math.random() * 100};
        return(
            <View style={styles.containerHome}>
	            <Text>home</Text>
	            <Button title="Detail" onPress={()=> this.props.navigation.navigate('Detail',{...data})}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	containerHome:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
export default Home;