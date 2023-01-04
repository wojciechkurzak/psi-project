import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { getHistory } from '../config/asyncStorage'
import { FontAwesome5 } from '@expo/vector-icons'

const BmiHistoryScreen = () => {
	const [history, setHistory] = useState([])

	const renderItem = ({ item }) => (
		<View style={styles.historyItem}>
			<View style={styles.topContainer}>
				<Ionicons
					name={item.gender}
					size={26}
					color="#fff"
					style={styles.historyIcon}
				/>
				<Text style={styles.historyUpperText}>{item.height}cm</Text>
				<Text style={styles.historyUpperText}>{item.weight}kg</Text>
			</View>
			<View style={styles.bottomContainer}>
				<Text style={styles.historyBottomText}>BMI: {item.bmi}</Text>
				<Text style={styles.historyBottomText}>
					Perfect weight: {item.idealWeight}kg
				</Text>
			</View>
		</View>
	)

	const getItems = async () => {
		const data = await getHistory('BmiHistory')
		setHistory(data)
	}

	useEffect(() => {
		getItems()
	}, [])

	return history.length > 0 ? (
		<View style={styles.historyContainer}>
			<FlatList data={history} renderItem={renderItem} />
		</View>
	) : (
		<View style={styles.historyErrorContainer}>
			<FontAwesome5 name="history" size={22} color="#999" />
			<Text style={styles.historyError}>No history</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	historyContainer: {
		backgroundColor: '#0a0e21',
		flex: 1,
		paddingHorizontal: 20,
	},
	historyErrorContainer: {
		backgroundColor: '#0a0e21',
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	historyError: {
		color: '#999',
		fontSize: 22,
		textAlign: 'center',
		marginVertical: 12,
		alignSelf: 'center',
	},
	historyItem: {
		width: '100%',
		backgroundColor: '#1d1e33',
		borderRadius: 8,
		alignItems: 'center',
		marginTop: 10,
	},
	historyUpperText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
	},
	historyBottomText: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
	},
	topContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#111328',
		padding: 4,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	bottomContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 40,
	},
})

export default BmiHistoryScreen
