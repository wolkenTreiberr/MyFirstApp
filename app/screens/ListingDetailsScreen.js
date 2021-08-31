import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function ListingDetailsScreen(props) {
    return (
      <View>
          <Image style={styles.image} source={require('../assets/lawnMower.jpg')}/>
          <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red Grass Destroyer for sale</AppText>
          <AppText style={styles.price}>$100</AppText>
          <AppText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo. Dictumst quisque sagittis purus sit. Dapibus ultrices in iaculis nunc sed. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Orci dapibus ultrices in iaculis nunc sed augue lacus. Accumsan lacus vel facilisis volutpat est velit. Arcu dictum varius duis at consectetur lorem. Netus et malesuada fames ac turpis egestas maecenas. Id donec ultrices tincidunt arcu non. Ut pharetra sit amet aliquam id diam maecenas.</AppText>
          <View style={styles.userContainer}>
          <ListItem image={require("../assets/ProfilePhoto1.jpg")} title="Franc Wallker" subTitle="5 Listings"/>
          </View>
          </View>
      </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    },
    price: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5
    },
    userContainer: {
        marginVertical: 20
    }
})