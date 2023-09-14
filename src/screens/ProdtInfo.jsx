import { Image, SafeAreaView, Text, View } from "react-native";
import { ProdtInfoStyle } from "../style/style";

export function ProdtInfo({ route }) {
    const { titulo, estudio, itemName, preco, itemDesc, imagem } = route.params

    return(
        <SafeAreaView style={ProdtInfoStyle.container}>
            <View style={ProdtInfoStyle.prodtInfoImgView}>
                <Image source={{ uri: imagem }} style={ProdtInfoStyle.prodtInfoImg}/>
            </View>
            <Text style={ProdtInfoStyle.prodtInfoTitle}>{titulo}, {itemName}</Text>
            <Text style={ProdtInfoStyle.prodtInfoStudio}>{estudio}</Text>
            <Text style={ProdtInfoStyle.prodtInfoPrice}>{preco.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
            <Text>{itemDesc}</Text>
        </SafeAreaView>
    )
}
