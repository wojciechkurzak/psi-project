import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { getHistory } from '../config/asyncStorage'

const BmiHistoryScreen = () => {
	const [history, setHistory] = useState(null)

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

	return (
		history && (
			<View style={styles.historyContainer}>
				<FlatList data={history} renderItem={renderItem} />
			</View>
		)
	)
}

const styles = StyleSheet.create({
	historyContainer: {
		backgroundColor: '#0a0e21',
		flex: 1,
		paddingHorizontal: 20,
	},
	historyTitle: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
		marginVertical: 12,
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
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
	},
})

export default BmiHistoryScreen
