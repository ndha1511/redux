import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput, FlatList } from "react-native";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { add, remove } from "../redux/action";

function TodoRedux({ data, navigation }) {
    const [value, setValue] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={{ width: '60%', height: 30, backgroundColor: '#fff' }} onChangeText={setValue}></TextInput>
                <TouchableOpacity style={{ padding: 20, backgroundColor: 'gray' }} onPress={() => {store.dispatch(add(value))}}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({item, index}) =>{
                        return (
                            <View style={{flexDirection: 'row'}}>
                                <Text>{item}</Text>
                                <TouchableOpacity style={{ padding: 20, backgroundColor: 'gray' }} onPress={() => {store.dispatch(remove(index))}}>
                                    <Text>Remove</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 20, backgroundColor: 'gray' }} onPress={() => {navigation.navigate('todo-redux_update', {index})}}>
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
const mapsToProps = (state) => (
    { data: state.data }
)
export default connect(mapsToProps, null)(TodoRedux);