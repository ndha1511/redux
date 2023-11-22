import { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput, FlatList } from "react-native";


export default function APIRedux({ navigation }) {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const add = () => {
        fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(json => {
            //console.log(json);
            fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => { if (res.ok) return res.json() })
                .then(json => { setData(json);})

        })
    }

    const remove = (item) => {
        fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo/" + item.id, {method: 'DELETE'} )
        .then(res => {if (res.ok) {
            fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => { if (res.ok) return res.json() })
                .then(json => { setData(json);})
        }})

    }
    useEffect(() => {
        fetch("https://655cc42725b76d9884fdead5.mockapi.io/todo", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => { if (res.ok) return res.json() })
            .then(json => { setData(json); console.log(json); })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={{ width: '60%', height: 30, backgroundColor: '#fff' }} onChangeText={setValue}></TextInput>
                <TouchableOpacity style={{ padding: 20, backgroundColor: 'gray' }} onPress={() => { add() }}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{item.value}</Text>
                                <TouchableOpacity style={{ padding: 20, backgroundColor: 'gray' }} onPress={() => { remove(item) }}>
                                    <Text>Remove</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 20, backgroundColor: 'gray' }} onPress={() => { navigation.navigate('update', {item, setData}) }}>
                                    <Text>Update</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'blue',
        paddingHorizontal: 20
    }
})
