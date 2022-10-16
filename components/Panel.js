import React from 'react'
import { StyleSheet, Dimensions, Button, View } from 'react-native'

export default ({onPressLeft, textLeft, togglePointsFilter}) => {
    return (
        <View style={styles.panel}>
            <Button style={styles.botones} onPress={onPressLeft} title={textLeft}/>
            <Button style={styles.botones} title='Mostrar/Ocultar' onPress={togglePointsFilter}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    panel: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
});