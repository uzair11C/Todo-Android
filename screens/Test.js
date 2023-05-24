import { View, Text } from "react-native";
import React from "react";
import { Button } from "@react-native-material/core";

const Test = ({ navigation }) => {
	return (
		<View>
			<Text>Test</Text>
			<Button title="Test" onPress={() => navigation.navigate("Home")} />
		</View>
	);
};

export default Test;
