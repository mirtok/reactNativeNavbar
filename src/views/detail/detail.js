import React, {Component} from 'react';

import LogoTitle from '../../components/logo-title'
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native'

class Detail extends Component {

	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: () => <LogoTitle/>,
			headerTintColor: '#ff0000',
			headerStyle: {
				backgroundColor: 'skyblue'
			},
			headerRight: () => (<Button title="详情" style={{paddingLeft: 30, paddingRight: 30}}
			                            onPress={() => {
			                            	const _increaseCount = navigation.getParam('_increaseCount');
				                            _increaseCount();
			                            }}/>),
			headerRightContainerStyle: {
				paddingRight: 20
			}
		}
	}

	componentDidMount() {
		this.props.navigation.setParams({_increaseCount: this._increaseCount})
	}

	_increaseCount = () => {
		console.log(156)
	}

	render() {
		const {navigation} = this.props;
		return (
			<View>
				<Text style={styles.fontStyle}>detail</Text>
				<Text>{navigation.getParam('NAME', '默认NAME')}</Text>
				<Text>{navigation.getParam('ID', '默认ID')}</Text>
				<View style={styles.containerMain}>
					<Button style={styles.btnStyle} title="push" onPress={() => this.props.navigation.push('Detail')}/>
					<Button title="back" onPress={() => this.props.navigation.goBack()}/>
					<Button title="pop" onPress={() => this.props.navigation.pop()}/>
					<Button title="popToTop" onPress={() => this.props.navigation.popToTop('Detail')}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	fontStyle: {
		paddingBottom: 40,
		paddingTop: 40,
		color: '#ff0000',
		textAlign: 'center'
	},
	containerMain: {
		height: 300,
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
		padding: 20
	}
})

export default Detail;