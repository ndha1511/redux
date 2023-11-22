import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoRedux from './components/todo_redux';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReduxUpdate from './components/todo_redux_update';
import { Text, TouchableOpacity, View } from 'react-native';
import APIRedux from './components/todo_api';
import Update from './components/update_api';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => { navigation.navigate('todo-redux') }}>
        <Text>Redux</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('todo-api')}}>
        <Text>API</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="todo-redux" component={TodoRedux} />
          <Stack.Screen name="todo-redux_update" component={ReduxUpdate} />
          <Stack.Screen name="todo-api" component={APIRedux}/>
          <Stack.Screen name="update" component={Update} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


