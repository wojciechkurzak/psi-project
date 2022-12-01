import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native'

const GenderButton = ({ text, value, iconName, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={() => onPress()}>
			<View style={[styles.buttonContainer, value && styles.checked]}>
				<Ionicons name={iconName} size={20} color="#fff" />
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderWidth: 1,
		borderColor: '#111328',
		borderRadius: 8,
		height: 50,
		backgroundColor: '#111328',
		flexBasis: '48%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	checked: {
		borderColor: '#eb1555',
		backgroundColor: '#1d1e33',
	},
	text: {
		textAlign: 'center',
		color: '#fff',
	},
})

export default GenderButton
