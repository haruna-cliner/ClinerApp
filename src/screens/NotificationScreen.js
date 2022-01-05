import React, { useState } from "react";
import { Button, FlatList, KeyboardAvoidingView, View, StyleSheet } from "react-native";
import Colors from "../themes/colors";
import ActivityIndicator from "../components/common/ActivityIndicator";
import { useDispatch, useSelector } from "react-redux";
import { contentLoading, deleteTodo, selectTodos } from "../state/content.slice";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItem from "../components/lists/ListItem";

const NotificationsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(contentLoading);
  const todos = useSelector(selectTodos);

  const handlePress = (todo) => {
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.id));
  };

  return (<KeyboardAvoidingView style={[{ backgroundColor: Colors.primaryDark, width: "100%", height: "100%" }]}>
    <ActivityIndicator visible={refreshing || loading} height={"20%"} />
    <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={(todo) => todo.id.toString()}
      renderItem={({ item }) => (<ListItem
        title={item.title}
        onPress={() => handlePress(item)}
        renderRightActions={() => (<ListItemDeleteAction
          onPress={() => handleDelete(item)}
        />)}
      />)}
      // ItemSeparatorComponent={ListItemSeparator}
      refreshing={loading}
      onRefresh={setRefreshing}
    />
    <Button onPress={() => navigation.goBack()} title="Go back home" />
  </KeyboardAvoidingView>);
};
export default NotificationsScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
