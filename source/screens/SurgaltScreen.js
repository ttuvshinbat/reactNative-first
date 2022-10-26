import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from "axios"
const SurgaltScreen = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get("https://1234.mn/api/courses/last-lessons")
            .then(res => setData(res))
            .catch(err => setData(err))
    }, [])

    return (
        <View>
            <Text>New Course</Text>

            <Text> https://1234.mn/api/courses/last-lessons</Text>
            <Text> ug api hayag deerees 1234.mn site iin hamgiin suuld nemegdesen hicheeluudiig haruulhiig zorison bolovch uri ni zorson baina</Text>
        </View>
    )
}

export default SurgaltScreen

const styles = StyleSheet.create({})