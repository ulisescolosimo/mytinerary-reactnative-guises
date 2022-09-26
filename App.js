import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <ScrollView>
        <Text style={styles.text}>
          loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        </Text>
        <Image style={{ width: 305, height: 159 }} source={{uri: 'https://randomwordgenerator.com/img/picture-generator/57e9d6424a55ab14f1dc8460962e33791c3ad6e04e5074417d2e72dd9349c0_640.jpg'}} />
        </ScrollView>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
        </TouchableOpacity>
      <FlatList  />
      <StatusBar style="auto" />
    </View>
  );
}

/* npx expo start */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
  button: {
    backgroundColor: 'black',
    color: 'black',
    padding: 20,
    borderRadius: 10,
  }
});

