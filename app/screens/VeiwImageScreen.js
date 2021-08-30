import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function VeiwImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
       <Image
       resizeMode="contain"
       style={styles.image} source={{ uri: "http:/picsum.photos/200/300"}}/>
       </View>
    );
}

export default VeiwImageScreen;
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    
    container: {
        backgroundColor: "#000",
        flex: 1,
    },

    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#fc5c65',
        position: 'absolute',
        top: 50,
        left: 30,
    },

    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#4ecdc4',
        position: 'absolute',
        top: 50,
        right: 30,
    }
})