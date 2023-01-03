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
import BmiHistoryScreen from './screens/BmiHistoryScreen'
import HistoryButton from './components/HistoryButton'

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
							headerRight: () => (
								<HistoryButton route="BmiHistory" />
							),
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
					<Stack.Screen
						name="BmiHistory"
						component={BmiHistoryScreen}
						options={{
							...screenOptions,
							title: 'History',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

export default App
