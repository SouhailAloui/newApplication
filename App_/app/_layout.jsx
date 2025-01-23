import { Stack } from "expo-router";
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcom" }} />
      <Stack.Screen name="signUpScreen" options={{ title: "Sign Up" }} />
      <Stack.Screen name="loginscreen" options={{ title: "login",presentation:"modal" }} />
      <Stack.Screen name="+not-found" options={{ title: "oops !!!" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown:false}} />
      <Stack.Screen name="(agency)" options={{ headerShown:false}} />

    </Stack>
  );
}
