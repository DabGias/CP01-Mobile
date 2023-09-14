import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProdtList } from './src/screens/ProdtList'
import { ProdtInfo } from './src/screens/ProdtInfo'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'react-native'
import { FavList } from './src/screens/FavList'

const Stack = createStackNavigator()

export default function App() {
    useEffect(() => {
        resetAsyncStorage()
    }, [])

    async function resetAsyncStorage() {
        await AsyncStorage.setItem("favs", JSON.stringify([]))
    }

    return (
        <NavigationContainer>
            <StatusBar hidden={true}/>

            <Stack.Navigator>
                <Stack.Screen 
                    name="ProdtList" 
                    component={ProdtList}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="ProdtInfo" 
                    component={ProdtInfo}
                    options={({ route }) => ({ title: route.params.titulo })} 
                />
                <Stack.Screen
                    name="FavList"
                    component={FavList}
                    options={{ title: "Favoritos" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}
