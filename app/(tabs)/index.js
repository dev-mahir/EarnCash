import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Welcome, User!</Text>
			<Button
				title="Go to Earn Screen"
				onPress={() => navigation.navigate("Earn")}
			/>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="earn" options={{ title: "Earn" }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	welcomeText: {
		fontSize: 24,
		marginBottom: 20,
		fontWeight: "bold",
		color: "#333",
	},
	earnText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#007bff",
	},
});
