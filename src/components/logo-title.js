import React,{Component} from 'react';

import {
	Image,
	StyleSheet
} from 'react-native'

class LogoTitle extends Component{
	render() {
		const pic = {
			uri: 'http://www.lxit365.com/fileUpload/static/upload/image/20201020/e9ece241e58d41d292727cee0e861f7b.png'
		};
		return(
	        <Image source={pic} style={styles.tinyLogo}/>
        )
    }
}

const styles = StyleSheet.create({
	tinyLogo: {
		width: 30,
		height: 30,
		borderRadius: 50
	}
})

export default LogoTitle;