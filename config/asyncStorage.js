import AsyncStorage from '@react-native-async-storage/async-storage'

export const getHistory = async (key) => {
	const jsonValue = await AsyncStorage.getItem(key)
	const value = JSON.parse(jsonValue)
	return value === null ? [] : value
}

export const storeHistory = async (key, value) => {
	const history = await getHistory(key)
	let newHistory = [value, ...history]
	if (newHistory.length > 5) newHistory.pop()
	const jsonValue = JSON.stringify(newHistory)
	await AsyncStorage.setItem(key, jsonValue)
}
