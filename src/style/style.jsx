import { StyleSheet } from "react-native"

export const ProdtListStyle = StyleSheet.create({
    container: {
        flex: 1
    },

    prodtCard: {
        flex: 1/2,
        padding: 15,
        borderRadius: 15,
        margin: 10,
        backgroundColor: "#d1d1d1"
    },

    prodtCardImg: {
        width: "100%",
        height: 200,
        marginBottom: 20,
        resizeMode: "center"
    },

    prodtCardTitle: {
        marginBottom: 10
    },

    prodtCardButton: {
        width: "100%",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 10,
        borderRadius: 15, 
        backgroundColor: "#34bc67"
    },

    prodtCardButtonText: {
        textAlign: "center",
        fontWeight: "bold"
    },

    prodtListFavButton: {
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 15, 
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#34bc67"
    },

    prodtListFavButtonText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export const ProdtInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%"
    },

    prodtInfoImgView: {
        width: "100%",
        padding: 15,
        backgroundColor: "#d1d1d1",
        borderRadius: 15
    },

    prodtInfoImg: {
        width: "100%",
        height: 300,
        resizeMode: "center"
    },

    prodtInfoTitle: {
        fontSize: 30,
        marginTop: 30,
        textAlign: "center"
    },

    prodtInfoStudio: {
        fontSize: 20,
        marginBottom: 30,
        textAlign: "center"
    },

    prodtInfoPrice: {
        fontSize: 30
    }
})

export const FavListStyle = StyleSheet.create({
    container: {
        flex: 1
    },

    favListCard: {
        flex: 1,
        margin: 10,
        borderRadius: 15,
        flexDirection: "row",
        backgroundColor: "#d1d1d1",
    },

    favListCardImgView: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: "30%"
    },

    favListCardImg: {
        width: "100%",
        height: 150,
        resizeMode: "center"
    },

    favListCardInfoView: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        width: "70%",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }
})
