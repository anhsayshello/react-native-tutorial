import { Text, TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    gap: 10,
  },
});

const initialValues = {
  mass: "",
  height: "",
};

const getBodyMassIndex = (mass, height) => {
  return Math.round(mass / Math.pow(height, 2));
};

const validationSchema = yup.object().shape({
  mass: yup
    .number()
    .min(1, "Weight must be greater or equal to 1")
    .required("Weight is required"),
  height: yup
    .number()
    .min(0.5, "Height must be greater or equal to 0.5")
    .required("Height is required"),
});

const BodyMassIndexForm = ({ onSubmit, result }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Weight (kg)"
        value={formik.values.mass}
        onChangeText={formik.handleChange("mass")}
      />
      {formik.touched.mass && formik.errors.mass && (
        <Text style={{ color: "red" }}>{formik.errors.mass}</Text>
      )}
      <TextInput
        placeholder="Height (m)"
        value={formik.values.height}
        onChangeText={formik.handleChange("height")}
      />
      {formik.touched.height && formik.errors.height && (
        <Text style={{ color: "red" }}>{formik.errors.height}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text>Caculate</Text>
      </Pressable>
      {result && <Text>Your body mass index is {result}</Text>}
    </View>
  );
};

const BodyMassIndexCalculator = () => {
  const [result, setResult] = useState();
  const onSubmit = (values) => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);
    setResult(getBodyMassIndex(mass, height));

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${result}`);
    }
  };

  return <BodyMassIndexForm onSubmit={onSubmit} result={result} />;
};

export default BodyMassIndexCalculator;
