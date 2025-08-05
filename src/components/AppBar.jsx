import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: Constants.statusBarHeight - 20,
    backgroundColor: "#24292e",
  },
  scrollView: {
    paddingHorizontal: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/">
          <Text color="secondary" fontSize="subheading" fontWeight="bold">
            Repositories
          </Text>
        </Link>
        <Link to="/signIn" style={{ marginLeft: 12 }}>
          <Text color="secondary" fontSize="subheading" fontWeight="bold">
            Sign in
          </Text>
        </Link>
        <Link to="/caculator" style={{ marginLeft: 12 }}>
          <Text color="secondary" fontSize="subheading" fontWeight="bold">
            BodyMass
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
