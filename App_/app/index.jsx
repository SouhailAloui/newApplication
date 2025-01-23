import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('@/assets/images/imagebackground.webp')} style={styles.background}>
      <Link href="/loginscreen" style={styles.link} >Login</Link>
      <View style={styles.overlay}>
        <Text style={styles.text}>Hello World!</Text>
        
      </View>
      <Link href="/signUpScreen" style={styles.links} >Get your car</Link>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});