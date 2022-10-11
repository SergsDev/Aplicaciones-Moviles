import React from "react";
import { StyleSheet, Dimensions, Modal, View, Text } from "react-native";

export default () => {
  return (
    <Modal animationType="slide" transparent={true} visible={false}>

      <View style={styles.center}>
        <View style={styles.ModalView}>
          <Text>Hola modal</Text>
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ModalView: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
})