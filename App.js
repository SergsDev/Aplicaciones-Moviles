import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import {  Map, Modal, Input, Panel, List} from './components' //Agregar Panel


export default function App() {
  // Array en el que se guardaran los puntos
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setpuntoTemp] = useState({}) 
  //array donde se guaran los nombres de los puntos
  const [nombre, setNombre] = useState('')
  //controla el estado de la visibilidad del modal
  const [visibilityFilter, setvisibilityFilter] = useState('new_puntos')
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setpointsFilter] = useState(true)

  //Al mantener presionado crea el punto
  const handleLongPress = ({ nativeEvent}) =>{
    setvisibilityFilter('new_puntos')
    setpuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
  //cambia el estado de los puntos en el mapa
  const togglePointsFilter = () => setpointsFilter(!pointsFilter)

  //agrega el nombre del marcador al array
  const handleChangeText = text => {
    setNombre(text)
  }

  //crea y guarda la informacion del punto en un array
  const handleSubmit = () => {
    const newPunto = {coordinate: puntoTemp, name: nombre};
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }
  //cambia el estado del modal de lista a true
  const handleLista = () =>{  
    setvisibilityFilter('all_puntos')
    setVisibility(true)
  }

  // console.log(puntos);
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}>
          { visibilityFilter === 'new_puntos' 
          ? 
          <View style={styles.form}>
            <Input title='Agregar Punto' placeholder='Nombre del punto' onChangeText={handleChangeText}/>
            <Button title='Aceptar' onPress={handleSubmit}/>
          </View>
          : <List puntos={puntos} closeModal={() => setVisibility(false)}/>
          }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },


});