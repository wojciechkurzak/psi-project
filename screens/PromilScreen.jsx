import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AddButton from '../components/AddButton'
import CalcButton from '../components/CalcButton'
import GenderButton from '../components/GenderButton'
import ItemsList from '../components/ItemsList'
import uuid from 'react-native-uuid'
import PromilCard from '../components/PromilCard'
import DisplayValue from '../components/DisplayValue'
import { storeHistory } from '../config/asyncStorage'
import ClearButton from '../components/ClearButton'

const PromilScreen = () => {
	const [gender, setGender] = useState({
		male: false,
		female: false,
	})
	const [weight, setWeight] = useState('')
	const [mililiters, setMililiters] = useState('')
	const [percentage, setPercentage] = useState('')
	const [items, setItems] = useState([])
	const [promils, setPromils] = useState('')
	const [soberTime, setSoberTime] = useState('')

	const addItem = () => {
		if (mililiters.length === 0 || percentage.length === 0) return
		const newItem = [
			...items,
			{
				id: uuid.v4().toString(),
				mililiters: mililiters,
				percentage: percentage,
			},
		]
		setItems(newItem)
	}

	const removeItem = (id) => {
		const filteredItems = items.filter((item) => item.id !== id)
		setItems(filteredItems)
	}

	const calculateGrams = () => {
		let grams = 0
		items.forEach(
			(item) =>
				(grams +=
					parseFloat(item.mililiters) *
					(parseFloat(item.percentage) / 100) *
					0.8)
		)
		return grams
	}

	const calculatePromil = (grams) => {
		const promil =
			Math.round(
				(grams / ((gender.male ? 0.7 : 0.6) * parseFloat(weight))) * 100
			) / 100
		return promil
	}

	const calculateSoberTime = (grams) => {
		const soberTime = Math.round(grams / 10)
		return soberTime
	}

	const displayValues = () => {
		if ((!gender.male && !gender.female) || !weight || items.length === 0)
			return
		const grams = calculateGrams()
		const calculatedPromil = calculatePromil(grams)
		const calculatedSoberTime = calculateSoberTime(grams)
		setPromils(calculatedPromil.toString())
		setSoberTime(calculatedSoberTime.toString())
		storeHistory('PromilHistory', {
			gender: gender.male ? 'male' : 'female',
			weight: weight,
			promil: calculatedPromil,
			soberTime: calculatedSoberTime,
		})
	}

	const clearValues = () => {
		setGender({ male: false, female: false })
		setWeight('')
		setMililiters('')
		setPercentage('')
		setItems([])
		setPromils('')
		setSoberTime('')
	}

	const renderItem = ({ item }) => (
		<PromilCard item={item} removeItem={removeItem} />
	)

	return (
		<View style={styles.container}>
			<View style={styles.genderContainer}>
				<GenderButton
					text="Male"
					value={gender.male}
					iconName="male"
					onPress={() => setGender({ male: true, female: false })}
				/>
				<GenderButton
					text="Female"
					value={gender.female}
					iconName="female"
					onPress={() => setGender({ male: false, female: true })}
				/>
			</View>
			<TextInput
				style={styles.input}
				value={weight}
				onChangeText={setWeight}
				keyboardType="numeric"
				placeholder="Weight [kg]"
				placeholderTextColor={'#fff'}
			/>
			<View style={styles.itemContainer}>
				<TextInput
					style={[styles.input, styles.itemInput]}
					value={mililiters}
					onChangeText={setMililiters}
					keyboardType="numeric"
					placeholder="ml"
					placeholderTextColor={'#fff'}
				/>
				<TextInput
					style={[styles.input, styles.itemInput]}
					value={percentage}
					onChangeText={setPercentage}
					keyboardType="numeric"
					placeholder="%"
					placeholderTextColor={'#fff'}
				/>
				<AddButton onPress={addItem} />
			</View>
			<ItemsList items={items} renderItem={renderItem} maxHeight={170} />
			<CalcButton text="Calculate" onPress={displayValues} />
			{promils && soberTime && (
				<>
					<View style={styles.valuesContainer}>
						<DisplayValue title="Promils" value={promils} />
						<DisplayValue
							title="Sober time"
							value={soberTime}
							unit="h"
						/>
					</View>

					<ClearButton text="Clear" onPress={clearValues} />
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		backgroundColor: '#0a0e21',
		flex: 1,
	},
	genderContainer: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		borderRadius: 8,
		marginTop: 20,
		padding: 10,
		width: '100%',
		height: 50,
		backgroundColor: '#1d1e33',
		color: '#fff',
	},
	itemContainer: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemInput: {
		width: '40%',
		marginTop: 0,
	},
	valuesContainer: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

export default PromilScreen
