import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'

const ClearButton = ({ text, onPress }) => {
	return (
		<TouchableNativeFeedback onPress={() => onPress()}>
			<View style={styles.buttonContainer}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#111328',
		width: 120,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		alignSelf: 'center',
		marginVertical: 20,
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
})

export default ClearButton
