import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EarnScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome to the Earn Screen!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	text: {
		fontSize: 24,
		color: "#007bff",
	},
});

export default EarnScreen;
