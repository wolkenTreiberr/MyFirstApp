import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from 'yup';


import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton} from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    name: Yup.string().required().label("Name")
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
      initialValues={{email: "", password: "", name: ""}}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
      >
          <AppFormField
          name="name"
          autoCorrect={false}
          icon="account-cowboy-hat"
          keyboardType="default"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
        name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register"/>
        </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
    container: {
    padding: 10,
  },
});
export default RegisterScreen;
