import { StyleSheet, Text, View , FlatList,SafeAreaView, StatusBar, TouchableOpacity,Alert} from 'react-native'
import React, { useState, useEffect } from 'react'

const FlatlistScreen = (props) => {
    const[todo, setTodo]=useState("")
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setTodo(json))
    },[])
   
    const Item=({title, completed,id }) =>(
        <View style={styles.item}><TouchableOpacity onPress={()=> Alert.alert(`hello : ${title}`)}>
            <Text style={styles.title}>my id-{id}</Text></TouchableOpacity>
      
            <Text style={styles.title}>{title}</Text>
            
            <Text style={styles.title}>`hello -- {completed}-- bi id iin daraa baih ystoi`</Text>
        </View>
    )
   
        const renderItem=({item})=>{
            return(
                <Item title={item.title} id={item.id}  completed={item.userId}/>
               )
        }
    const todos= todo.slice(0,10)
return ( <SafeAreaView style={styles.container}>
    <FlatList
    data={todos}
    renderItem={renderItem}
    />
  </SafeAreaView>
)
}

export default FlatlistScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
      },
      title: {
        fontSize: 16,
      },
})