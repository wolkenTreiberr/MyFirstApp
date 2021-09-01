import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Gardening Gloves For Sale',
        price: 70,
        image: require('../assets/garderingGloves.jpg')
    },
    {
        id: 2,
        title: 'Lawn Mower For Sale',
        price: 249,
        image: require('../assets/lawnMower.jpg')
    },
    {
        id: 3,
        title: 'Pig Feeder For Sale',
        price: 140,
        image: require('../assets/pigFeeder.jpg')
    },
    {
        id: 4,
        title: 'Horse Saddle For Sale',
        price: 500,
        image: require('../assets/horseSaddle.jpg')
    },
    {
        id: 5,
        title: 'Tractor In Good Condition For Sale',
        price: 1000,
        image: require('../assets/Tractor.jpg')
    }
]

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
        <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => 
        <Card
        title={item.title}
        subTitle={'$' + item.price}
        image={item.image}/>
    }
        />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 15,
        backgroundColor: colors.light
    }
})  

export default ListingScreen;