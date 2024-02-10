import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const ProductDetails = ({route}) => {
    const product = route.params

    return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} resizeMode='contain' source={{uri: product.thumbnail}}/>
      <View style={styles.dataContainer}>
        <Text style={styles.brand}>Brand : {product.brand}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.price}>Price : {product.price}</Text>
        <Text style={styles.rating}>Rating {product.rating}</Text>
      </View>
     </View>
  );
}


const styles = StyleSheet.create({
    container:{
        width: "100%",
        flex: 1,
    },
    dataContainer:{
        width: "90%",
        marginHorizontal: "5%",
        gap: 20
    },
    thumbnail: {
        width: "90%",
        height: 200,
        marginHorizontal: "5%",
        marginVertical: "5%",
    },
    brand: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    desc: {
        fontSize: 18,
        fontWeight: "bold",
        color: "gray"
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    rating: {
        fontSize: 20,
        fontWeight: "bold",
        color: "grey"
    },
})