import React, { useCallback, useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { contentLoading, selectTodos, todoFetch } from "../state/content.slice";
import Colors from "../themes/colors";
import ActivityIndicator from "../components/common/ActivityIndicator";

function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(contentLoading);
  const todos = useSelector(selectTodos);

  useEffect(() => {

    dispatch(todoFetch());

  }, []);

  const onRefresh = useCallback(() => {

    setRefreshing(true);
    dispatch(todoFetch());
    setRefreshing(false);

  }, []);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <KeyboardAvoidingView style={[{ backgroundColor: Colors.primaryDark, width: "100%", height: "100%" }]}>
      <ActivityIndicator visible={refreshing || loading} height={"20%"} />
      <FlatList
        refreshing={refreshing}
        onRefresh={onRefresh}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
