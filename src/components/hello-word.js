import React,{Component} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ActivityIndicator,
	StyleSheet, Dimensions,
} from 'react-native'


const {width, height} = Dimensions.get('window')

const pic = {
	uri: 'http://www.lxit365.com/fileUpload/static/upload/image/20201020/e9ece241e58d41d292727cee0e861f7b.png'
};



class HelloWord extends Component{
	render() {
        return(
	        <View style={[styles.container, styles.horizontal]}>
		        <Image source={pic} style={styles.tinyLogo}/>
		        <ActivityIndicator size="large" color="#0000ff" />
		        <ActivityIndicator size="small" color="#00ff00" />
		        <ActivityIndicator size="large" color="#0000ff" />
		        <ActivityIndicator size="small" color="#00ff00" />
	        </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		justifyContent: "center"
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	},
	tinyLogo: {
		width: 200,
		height: 200
	}
});

export default HelloWord;