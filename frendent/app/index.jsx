import { Link } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function Index() {
  const { user, token, checkAuth, logout } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {user?.username}</Text>

      <Text style={styles.title}>token{token}</Text>
      <Text>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <Link href="/(auth)/signup">Signup Page</Link>
      </Text>
      <Text>
        <Link href="/(auth)">Login Page</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "blue",
  },
});
