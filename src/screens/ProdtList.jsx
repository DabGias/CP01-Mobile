import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, SafeAreaView, Text } from "react-native"
import { ProdtListStyle } from "../style/style"
import AsyncStorage from "@react-native-async-storage/async-storage"

function ProdtCard({ navigation, id, titulo, estudio, itemName, preco, itemDesc, imagem }) {
    const [fav, setFav] = useState(false)
    
    async function handleFav(prodt) {
        let favs = JSON.parse(await AsyncStorage.getItem("favs"))

        if (fav) {
            favs = favs.filter((prodtFav) => prodtFav.id !== prodt.id)

            await AsyncStorage.setItem("favs", JSON.stringify(favs))

            setFav(false)
        } else {
            favs.push(prodt)

            await AsyncStorage.setItem("favs", JSON.stringify(favs))

            setFav(true)
        }
    }

    return(
        <Pressable 
            style={ProdtListStyle.prodtCard}
            onPress={() => { navigation.navigate("ProdtInfo", { titulo, estudio, itemName, preco, itemDesc, imagem }) }}
        >
            <Image source={{ uri: imagem }} style={ProdtListStyle.prodtCardImg}/>
            <Text style={ProdtListStyle.prodtCardTitle}>{titulo}, {estudio}</Text>
            <Text>{preco.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
            <Pressable 
                style={ProdtListStyle.prodtCardButton}
                onPress={() => { handleFav({ id, titulo, estudio, itemName, preco, itemDesc, imagem }) }}
            >
                <Text style={ProdtListStyle.prodtCardButtonText}>{ fav ? "✔" : "Favoritar" }</Text>
            </Pressable>
        </Pressable>
    )
}

export function ProdtList({ navigation }) {
    const [prodts, setProdts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const resp = await fetch("https://run.mocky.io/v3/8810362d-ffa4-4635-9180-dfefa47242f4")

        setProdts(await resp.json())
    }

    return(
        <SafeAreaView style={ProdtListStyle.container}>
            <FlatList
                data={prodts}
                keyExtractor={prodt => prodt.id}
                renderItem={({ item }) => <ProdtCard key={item.id} navigation={navigation} {...item}/>}
                numColumns={2}
            />
            <Pressable
                style={ProdtListStyle.prodtListFavButton}
                onPress={() => { navigation.navigate("FavList") }}
            >
                <Text style={ProdtListStyle.prodtListFavButtonText}>Meus favoritos</Text>
            </Pressable>
        </SafeAreaView>
    )
}
