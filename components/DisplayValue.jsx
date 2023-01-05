import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DisplayValue = ({ title, value, unit }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.upperText}>{title}</Text>
			<Text style={styles.bottomText}>
				{value}
				{unit}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1d1e33',
		borderRadius: 8,
		paddingVertical: 10,
		width: 150,
		height: 80,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	upperText: {
		fontSize: 14,
		color: '#fff',
	},
	bottomText: {
		fontSize: 24,
		color: '#fff',
		fontWeight: '500',
	},
})

export default DisplayValue
