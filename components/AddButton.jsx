import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import Icon from '@expo/vector-icons/Octicons'

const AddButton = ({ onPress }) => {
	return (
		<TouchableNativeFeedback onPress={() => onPress()}>
			<View style={styles.buttonContainer}>
				<Icon name="plus" color="#fff" size={26} />
			</View>
		</TouchableNativeFeedback>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 32,
		height: 32,
		backgroundColor: '#eb1555',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default AddButton
