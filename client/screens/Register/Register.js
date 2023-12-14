import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./register.styles";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useFetch from "../../hooks/useFetch";


const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido")
    .required("Por favor ingresa un Email"),
  phone: Yup.string().min(8, 'El teléfono debe tener almenos 8 caracteres').matches(/^\d+$/, 'El teléfono debe contener solo números').required("Por favor ingresa tu celular"),
  password: Yup.string()
    .min(5, "Por favor ingresa almenos 5 caracteres")
    .required("Por favor ingresa una contraseña"),
  confirmPassword: Yup.string()
    .min(5, "Por favor ingresa almenos 5 caracteres")
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required("Por favor ingresa una contraseña"),
});

export default function Register({navigation}) {
  const { fetchData } = useFetch();

  async function handleSubmit({ email, phone, password }) {
    const res = await fetchData('/insertNewUserTable', 'POST', {
      email,
      password,
      image: "",
      name: email,
      age: 17,
      location: "Worldwide",
      biography: "una bio",
      isVerify: true,
      budget: 100000,
      searchedArea: "No Where"
    })
    
    console.log("Estado del Registro: "+JSON.stringify(res));
  }

  return (
    <KeyboardAwareScrollView>
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 10,
      }}
    >
      <Formik
        initialValues={{ email: "", phone: null, password: "", confirmPassword: ""}}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View style={styles.form}>
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              }}
              style={styles.goback}
            >
              <MaterialCommunityIcons name="arrow-left" style={[styles.textMainColour, {marginRight: 5}]} />
              <Text style={styles.textMainColour}>
                Volver
              </Text>
            </TouchableOpacity>

            <Text style={[styles.textMainColour, {fontSize: 18, textAlign: "left"}]}>Introduce tus datos:</Text>

            <View
              style={[
                styles.fieldSet,
                {
                  borderColor: errors.email ? "hsl(0 80% 60%)" : "#00000030",
                },
              ]}
            >
              <Text
                style={[
                  styles.legend,
                  { color: errors.email ? "hsl(0 80% 60%)" : "#000" },
                ]}
              >
                Email
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Introduce tu email"
                placeholderTextColor="#00000060"
              />
              {
                errors.email?
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="hsl(0 80% 50%)"
                  style={styles.errorIcon}
                />
                :
                null
              }
            </View>
            {errors.email && touched.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}

            <View
              style={[
                styles.fieldSet,
                {
                  borderColor: errors.phone ? "hsl(0 80% 60%)" : "#00000030",
                },
              ]}
            >
              <Text
                style={[
                  styles.legend,
                  { color: errors.phone ? "hsl(0 80% 60%)" : "#000" },
                ]}
              >
                Número celular
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Introduce tu celular"
                placeholderTextColor="#00000060"
              />
              {
                errors.phone?
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="hsl(0 80% 50%)"
                  style={styles.errorIcon}
                />
                :
                null
              }
            </View>
            {errors.phone && touched.phone && (
              <Text style={styles.errorMessage}>{errors.phone}</Text>
            )}

            <View
              style={[
                styles.fieldSet,
                {
                  borderColor: errors.password ? "hsl(0 80% 60%)" : "#00000030",
                },
              ]}
            >
              <Text
                style={[
                  styles.legend,
                  { color: errors.password ? "hsl(0 80% 60%)" : "#000" },
                ]}
              >
                Contraseña
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Introduce tu contraseña"
                placeholderTextColor="#00000060"
              />
              {
                errors.password?
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="hsl(0 80% 50%)"
                  style={styles.errorIcon}
                />
                :
                null
              }
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}

            <View
              style={[
                styles.fieldSet,
                {
                  borderColor: errors.confirmPassword ? "hsl(0 80% 60%)" : "#00000030",
                },
              ]}
            >
              <Text
                style={[
                  styles.legend,
                  { color: errors.confirmPassword ? "hsl(0 80% 60%)" : "#000" },
                ]}
              >
                Confirma tu contraseña
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                placeholder="Introduce tu contraseña"
                placeholderTextColor="#00000060"
              />
              {
                errors.confirmPassword?
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="hsl(0 80% 50%)"
                  style={styles.errorIcon}
                />
                :
                null
              }
            </View>
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
            )}




            <TouchableOpacity
              style={[
                styles.submit,
                { opacity: errors.password || errors.email ? 0.5 : 1 },
              ]}
              onPress={() =>
                isSubmitting || errors.password || errors.email
                  ? null
                  : handleSubmit()
              }
              disabled={isSubmitting}
            >
              <Text style={styles.submitContent}>{isSubmitting? "Cargando.." : "Continuar"}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
    </KeyboardAwareScrollView>
  );
}
