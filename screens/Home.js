import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
	Text,
	Stack,
	Button,
	Surface,
	TextInput,
	IconButton,
} from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TodoList from "../components/TodoList";

const Home = ({ navigation }) => {
	const [todos, setTodos] = useState([
		{ id: 1, todo: "Sample todo to always stay there" },
	]);

	const [todo, setTodo] = useState("");

	const addTodo = () => {
		const id = todos.length + 1;
		setTodos((prev) => [
			...prev,
			{
				id: id,
				todo: todo,
			},
		]);
		setTodo("");
	};

	const removeTodo = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		if (index !== -1) {
			const updatedTodos = [...todos];
			updatedTodos.splice(index, 1);
			setTodos(updatedTodos);
		}
	};

	return (
		<View style={styles.container}>
			<Text variant="h5" style={styles.text}>
				ToDos
			</Text>
			<Text variant="h5" style={styles.text}>
				Enter todos for today:
			</Text>
			<TextInput
				label="Enter Todo"
				variant="outlined"
				name="input-todo"
				id="input-todo"
				defaultValue={todo}
				onChangeText={(text) => {
					setTodo(text);
				}}
				style={{ width: "100%", marginTop: 20, marginBottom: 10 }}
			/>
			<Button variant="contained" onPress={addTodo} title="Add Todo" />
			<TodoList todos={todos} removeTodo={removeTodo} styles={styles} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: "#2f4f4f",
		alignItems: "center",
		padding: 25,
		display: "flex",
		justifyContent: "flex-start",
	},

	text: {
		textAlign: "center",
		paddingLeft: 5,
	},
});
