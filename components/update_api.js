import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput, FlatList } from "react-native";

export default function Update({ navigation, route }) {
    const [value, setValue] = useState('');
    const { item, setData } = route.params;
    const update = () => {
        fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo/" + item.id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        }).then((res) => {
            if (res.ok) {
                fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(res => { if (res.ok) return res.json() })
                    .then(json => { setData(json); navigation.navigate('todo-api'); })
                
            }
        })
    }
    return (
        <View>
            <Text>New value</Text>
            <TextInput style={{ width: 100, height: 30, backgroundColor: '#fff' }}
                onChangeText={setValue}></TextInput>
            <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => { update() }}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}