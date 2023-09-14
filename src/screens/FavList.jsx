import { useEffect, useState } from "react"
import { Image, SafeAreaView, View, Text, Pressable, FlatList } from "react-native"
import { FavListStyle } from "../style/style"
import AsyncStorage from "@react-native-async-storage/async-storage"

function FavCard({ navigation, id, titulo, estudio, itemName, preco, itemDesc, imagem }) {
    return(
        <Pressable 
            style={FavListStyle.favListCard}
            onPress={() => { navigation.navigate("ProdtInfo", { titulo, estudio, itemName, preco, itemDesc, imagem }) }}
        >
            <View style={FavListStyle.favListCardImgView}>
                <Image source={{ uri: imagem }} style={FavListStyle.favListCardImg}/>
            </View>
            <View style={FavListStyle.favListCardInfoView}>
                <Text>{titulo}</Text>
                <Text>{itemName}</Text>
                <Text>{preco.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
            </View>
        </Pressable>
    )
}

export function FavList({ navigation }) {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        getFavs()
    }, [])

    async function getFavs() {
        setFavs(await JSON.parse(await AsyncStorage.getItem("favs")))
    }

    return(
        <SafeAreaView>
            <FlatList
                data={favs}
                keyExtractor={fav => fav.id}
                renderItem={({ item }) => <FavCard key={item.id} navigation={navigation} {...item}/>}
            />
        </SafeAreaView>
    )
}
