import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import {  Map, Modal, Input} from './components' //Agregar Panel


export default function App() {
  // Array en el que se guardaran los puntos
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setpuntoTemp] = useState({}) 
  //array donde se guaran los nombres de los puntos
  const [nombre, setNombre] = useState('') 
  const [visibility, setVisibility] = useState(true)

  const handleLongPress = ({ nativeEvent}) =>{
    //Al mantener presionado crea el punto
    setpuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
    console.log('auxilio');
  }
  //agrega el nombre del marcador al array
  const handleChangeText = text => {
    setNombre(text)
  }

  //crea y guarda la informacion del usuario en un array
  const handleSubmit = () => {
    const newPunto = {coordinate: puntoTemp, name: nombre};
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }
  console.log(puntos);
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Modal visibility={visibility}>
        <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText}/>
        <Button title='Aceptar' onPress={handleSubmit}/>
      </Modal>
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