import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ItemsList from '../components/ItemsList'
import CaloriesCard from '../components/CaloriesCard'
import uuid from 'react-native-uuid'
import AddButton from '../components/AddButton'
import ClearButton from '../components/ClearButton'

const CaloriesScreen = () => {
	const [name, setName] = useState('')
	const [calories, setCalories] = useState('')
	const [items, setItems] = useState([])

	const addItem = () => {
		if (name.length === 0 || calories.length === 0 || calories <= 0) return
		const newItem = [
			...items,
			{
				id: uuid.v4().toString(),
				name: name,
				calories: calories,
			},
		]
		setItems(newItem)
	}

	const removeItem = (id) => {
		const filteredItems = items.filter((item) => item.id !== id)
		setItems(filteredItems)
	}

	const renderItem = ({ item }) => (
		<CaloriesCard item={item} removeItem={removeItem} />
	)

	const calculateCalories = () => {
		let totalCalories = 0
		items.forEach((item) => (totalCalories += parseInt(item.calories)))
		return totalCalories.toString()
	}

	const clearValues = () => {
		setName('')
		setCalories('')
		setItems([])
	}

	return (
		<View style={styles.constainer}>
			<Text style={styles.topText}>{calculateCalories()} kcal</Text>
			<View style={styles.itemContainer}>
				<TextInput
					style={[styles.input, styles.nameInput]}
					value={name}
					onChangeText={setName}
					placeholder="Name"
					placeholderTextColor={'#fff'}
				/>
				<TextInput
					style={[styles.input, styles.caloriesInput]}
					value={calories}
					onChangeText={setCalories}
					keyboardType="numeric"
					placeholder="kcal"
					placeholderTextColor={'#fff'}
				/>
				<AddButton onPress={addItem} />
			</View>
			<ItemsList items={items} renderItem={renderItem} />
			{items.length !== 0 && (
				<ClearButton text="Clear" onPress={clearValues} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	constainer: {
		flex: 1,
		backgroundColor: '#0a0e21',
		paddingHorizontal: 20,
	},
	topText: {
		marginTop: 20,
		color: '#fff',
		alignSelf: 'center',
		fontSize: 30,
	},
	itemContainer: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		borderRadius: 8,
		padding: 10,
		height: 50,
		backgroundColor: '#1d1e33',
		color: '#fff',
	},
	nameInput: {
		width: '55%',
	},
	caloriesInput: {
		width: '25%',
	},
})

export default CaloriesScreen
