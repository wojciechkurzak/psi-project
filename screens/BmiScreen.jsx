import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import CalcButton from '../components/CalcButton'
import DisplayValue from '../components/DisplayValue'
import GenderButton from '../components/GenderButton'

const BmiScreen = () => {
	const [height, setHeight] = useState('')
	const [weight, setWeight] = useState('')
	const [gender, setGender] = useState({
		male: false,
		female: false,
	})
	const [bmi, setBmi] = useState('')
	const [idealWeight, setIdealWeight] = useState('')

	const calculateBmi = () => {
		const value =
			Math.round(
				(parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)) *
					10
			) / 10
		setBmi(value.toString())
	}

	const calculateIdealWeight = () => {
		const value =
			Math.round(
				(parseFloat(height) - 100) * (gender.male ? 0.9 : 0.85) * 10
			) / 10
		setIdealWeight(value.toString())
	}

	const displayValues = () => {
		if (!height || !weight || (!gender.male && !gender.female)) return
		calculateBmi()
		calculateIdealWeight()
	}

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
				value={height}
				onChangeText={setHeight}
				keyboardType="numeric"
				placeholder="Height [cm]"
				placeholderTextColor={'#fff'}
			/>
			<TextInput
				style={styles.input}
				value={weight}
				onChangeText={setWeight}
				keyboardType="numeric"
				placeholder="Weight [kg]"
				placeholderTextColor={'#fff'}
			/>
			<CalcButton text="Calculate" onPress={displayValues} />
			{bmi && idealWeight && (
				<View style={styles.valuesContainer}>
					<DisplayValue title="BMI" value={bmi} />
					<DisplayValue title="Perfect weight" value={idealWeight} />
				</View>
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
	valuesContainer: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

export default BmiScreen
