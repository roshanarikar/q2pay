import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

export const Products = ({navigation}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getProducts = async () =>{
        try {
            setLoading(true);
            const res = await axios.get("https://dummyjson.com/products");
            if(res.status === 200){
                console.log(res.data);
                setData(res.data.products);
                setLoading(false);
            } else {
                setError("Error fetching data");
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setError("Error fetching data");
            setLoading(false);
        }
    }

    useEffect(()=>{
        getProducts();
    },[]);

    const renderProduct = ({item}) => (
        <TouchableOpacity style={styles.card} key={item.id} onPress={()=> navigation.navigate("ProductDetails",(item))}>
            <View style={styles.thumbnail}>
                <Image resizeMode='contain' style={styles.thumbnail} source={{uri: item.thumbnail}}/>
            </View>
            <View style={{flexDirection:"column", margin: 20, width:"40%"}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>Price : $ {item.price}</Text>
                <TouchableOpacity style={styles.view} onPress={()=> navigation.navigate("ProductDetails",(item))}>
                    <Text style={styles.viewText}>View Details</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator style={styles.spinner}/>
            ) : error ? (
                <Text style={styles.error}>{error}</Text>
            ) : (
                <FlatList data={data} renderItem={renderProduct} keyExtractor={item => item.id}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    spinner:{
        width: "100%",
        height: 500,
        margin: "auto"
    },
    card:{
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        width: "100%",
        backgroundColor:"white"
    },
    thumbnail:{
        width: 200,
        height: 100,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    price:{
        fontSize: 18,
        fontWeight: "bold",
        color: "grey",
    },
    view:{
        backgroundColor: "orange",
        justifyContent: "center",
        textAlign: "center",
        paddingHorizontal: "21%"
    },
    viewText:{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
    },
    error: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
        textAlign: "center",
        marginTop: 20,
    }
});
