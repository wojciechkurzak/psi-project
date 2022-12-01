import { NavigationContainer } from '@react-navigation/native'
import {
	CardStyleInterpolators,
	createStackNavigator,
} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import BmiScreen from './screens/BmiScreen'
import PromilScreen from './screens/PromilScreen'
import CaloriesScreen from './screens/CaloriesScreen'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()

const App = () => {
	const screenOptions = {
		headerStyle: {
			backgroundColor: '#0a0e21',
			elevation: 0,
			shadowOpacity: 0,
		},
		headerTitleStyle: {
			color: '#fff',
		},
		headerTintColor: '#fff',
		presentation: 'modal',
		cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	}

	return (
		<>
			<StatusBar backgroundColor="#0a0e21" barStyle="light-content" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					detachInactiveScreens={false}
				>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Bmi"
						component={BmiScreen}
						options={{
							...screenOptions,
							title: 'BMI calculator',
						}}
					/>
					<Stack.Screen
						name="Promil"
						component={PromilScreen}
						options={{
							...screenOptions,
							title: 'Promil calculator',
						}}
					/>
					<Stack.Screen
						name="Calories"
						component={CaloriesScreen}
						options={{
							...screenOptions,
							title: 'Calories calculator',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

export default App
