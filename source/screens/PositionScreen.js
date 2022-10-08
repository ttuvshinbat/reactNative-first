import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PositionScreen = () => {
  return (
   <View style={styles.parent}>
    <View style={styles.child1}>
        <Text>PositionScreen</Text></View>
        <View style={styles.child2}>
            <Text>PositionScreen</Text></View>
            <View style={styles.child3}>
                <Text>PositionScreen</Text>
                </View></View>
  )
}

export default PositionScreen

const styles = StyleSheet.create({
parent:{
     flex:1,
    borderColor:"black",
    borderWidth:1,
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center"
},
child1:{
    height:70,
    width:70,
    borderColor:"green",
    borderWidth:2,
},
child2:{
    position:"absolute",
    right:10,
    bottom:10,
    height:70,
    width:70,
    borderColor:"red",
    borderWidth:2,
},
child3:{
    height:70,
    width:70,
    borderColor:"orange",
    borderWidth:2,
},

})