import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 20,
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
}
