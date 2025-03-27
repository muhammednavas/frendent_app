import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";


export default function Index() {
 const {user, token, checkAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {user?.username}</Text>

      <Text>
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