import { StatusBar } from 'expo-status-bar';
import  * as React from 'react';
import Map from './components/Map';
import Modal from './components/Modal'
import Panel from './components/Panel'
import { StyleSheet, Text, View, Dimensions} from 'react-native';

export default function App() {

  const handleLongPress = ({ nativeEvent}) =>{
    console.log(nativeEvent);
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Modal/>
      <Panel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
