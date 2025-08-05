import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import BodyMassIndexCalculator from "./BodyMassIndexCalculator";

const styles = StyleSheet.create({
  container: {
    marginBottom: Constants.statusBarHeight + 20,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e4e3ea",
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/caculator" element={<BodyMassIndexCalculator />} />
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
}
