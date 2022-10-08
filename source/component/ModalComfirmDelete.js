import { StyleSheet, Text, View,Modal, SafeAreaView } from 'react-native'
import React from 'react'
import MyButton from './MyButton'

const ModalComfirmDelete = (props) => {

  return (
    <Modal visible={props.visible} animationType="slide">
        <SafeAreaView
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",

        }}>
        <Text style={{fontSize:24}}> ID {props.id} Delete ?</Text>
        <View
        style={{
            flexDirection:"row",
            marginTop:20,
            width:"60%",
            justifyContent: "space-between"
        }}>
        <MyButton title="close" onPress={props.cancel}/> 
      <MyButton title="delete" onPress={props.deleteItem}/> 
        </View>

        </SafeAreaView>

    </Modal>
  )
}

export default ModalComfirmDelete

const styles = StyleSheet.create({})