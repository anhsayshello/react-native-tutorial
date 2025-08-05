import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: "white",
    gap: 10,
  },
  input: {
    borderWidth: 0.5,
    padding: 14,
    height: 40,
    borderRadius: 4,
  },
  button: {
    paddingVertical: 14,
    color: "white",
    backgroundColor: "blue",
    fontWeight: 700,
    fontSize: 14,
    textAlign: "center",
    borderRadius: 4,
  },
  borderError: {
    borderColor: "red",
  },
});

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "username must be at least 5 characters")
    .max(30, "Too longs!")
    .required("Username is required"),
  password: yup
    .string()
    .min(7, "username must be at least 7 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const initialValues = { username: "", password: "" };
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema: SignInSchema,
    onSubmit,
  });
  const userNameError = formik.errors.username;
  const passwordError = formik.errors.password;

  return (
    <View style={styles.container}>
      <TextInput
        style={
          userNameError ? [styles.input, styles.borderError] : styles.input
        }
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {userNameError && <Text style={{ color: "red" }}>{userNameError}</Text>}
      <TextInput
        style={
          passwordError ? [styles.input, styles.borderError] : styles.input
        }
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry={true}
        onChangeText={formik.handleChange("password")}
      />
      {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
