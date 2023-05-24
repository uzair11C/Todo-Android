import React from "react";
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

const TodoList = ({ todos, removeTodo, styles }) => {
	return (
		<Stack
			justify="flex-start"
			spacing={12}
			style={({ marginTop: 30, width: "100%" }, styles.container)}
		>
			{todos &&
				todos.map((todo) => (
					<Surface
						elevation={2}
						category="medium"
						style={{
							flexDirection: "row",
							justifyContent: "space-evenly",
							alignItems: "center",
							paddingLeft: 20,
							paddingRight: 20,
							width: 290,
						}}
						key={todo.id}
					>
						<Text
							variant="body2"
							style={styles.text}
							numberOfLines={1}
							ellipsizeMode="tail"
						>
							<Text variant="body2" style={styles.text}>
								{todo.id}. &nbsp;
							</Text>
							{todo.todo}
						</Text>

						<IconButton
							icon={() => <MaterialIcons name="delete" size={24} color="red" />}
							color="#d6b704"
							onPress={() => {
								removeTodo(todo.id);
							}}
						/>
					</Surface>
				))}
			{/* <Button title="Test" onPress={() => navigation.navigate("Test")} /> */}
		</Stack>
	);
};

export default TodoList;
