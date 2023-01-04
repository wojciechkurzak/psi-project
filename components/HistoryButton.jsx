import React from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HistoryButton = ({ route }) => {
	const navigation = useNavigation()

	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate(route)}>
			<View style={styles.iconContainer}>
				<FontAwesome5 name="history" size={22} color="#fff" />
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	iconContainer: {
		marginRight: 18,
	},
})

export default HistoryButton
