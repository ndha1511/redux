import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput, FlatList } from "react-native";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { update } from "../redux/action";

function ReduxUpdate({navigation, route}) {
    const [value, setValue] = useState('');
    const {index} = route.params;
    return (
        <View>
            <Text>New value</Text>
            <TextInput style={{width: 100, height: 30, backgroundColor: '#fff'}}
            onChangeText={setValue}></TextInput>
            <TouchableOpacity style={{width: 30, height: 30}} onPress={()=> {store.dispatch(update(value, index)); navigation.goBack()}}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect()(ReduxUpdate);