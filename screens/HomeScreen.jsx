import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavigationButton from '../components/NavigationButton'

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello</Text>
			<NavigationButton text="BMI calculator" route="Bmi" />
			<NavigationButton text="Promil calculator" route="Promil" />
			<NavigationButton text="Calories calculator" route="Calories" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0a0e21',
	},
	text: {
		textAlign: 'center',
		fontSize: 34,
		marginBottom: 60,
		color: '#fff',
	},
})

export default HomeScreen
