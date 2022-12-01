import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const PromilCard = ({ item, removeItem }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{item.mililiters}ml</Text>
			<Text style={styles.text}>{item.percentage}%</Text>
			<TouchableWithoutFeedback onPress={() => removeItem(item.id)}>
				<Icon name="close" color="#fff" size={24} />
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 40,
		backgroundColor: '#1d1e33',
		marginBottom: 10,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	text: {
		color: '#fff',
	},
})

export default PromilCard
