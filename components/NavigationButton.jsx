import * as React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NavigationButton = ({ text, route }) => {
	const navigation = useNavigation()

	return (
		<TouchableNativeFeedback onPress={() => navigation.navigate(route)}>
			<View style={styles.container}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 50,
		backgroundColor: '#eb1555',
		marginTop: 40,
		borderRadius: 8,
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 18,
	},
})

export default NavigationButton
