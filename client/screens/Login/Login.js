import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppLogoWide } from "../../components/Icons/IconsView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./login.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useFetch from "../../hooks/useFetch";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido")
    .required("Por favor ingresa un Email"),
  password: Yup.string()
    .min(5, "Por favor ingresa almenos 5 caracteres")
    .required("Por favor ingresa una contraseña"),
});

export default function Login({navigation}) {
  const { fetchData } = useFetch();

  async function handleSubmit({ email, password }) {
    const res = await fetchData('/validateUser', 'POST', {
      email,
      password
    })
    
    console.log("Estado del Login: "+res.status);
    if (res.status === 'success') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Navbar' }],
      });
    }
  }

  return (
    <KeyboardAwareScrollView>
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
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
            <AppLogoWide size={225} style={styles.logo} />

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
              <Text style={styles.submitContent}>{isSubmitting? "Cargando.." : "Acceder"}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.textMainColour}>Olvidé mi contraseña</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.outlinedButton}
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Register' }],
        })}
      >
        <Text style={styles.textMainColour}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAwareScrollView>
  );
}
