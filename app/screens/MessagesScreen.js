import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const massages = [
    {
        id: 1,
        title: 'Old Rusty Pitchfork',
        description: 'Lorem ipsum dolor sit amet, consectet...',
        image: require('../assets/ProfilePhoto2.jpg')
    },
    {
        id: 2,
        title: 'Shiny Metal Chain',
        description: 'Ut enim ad minim veniam, quis nostru...',
        image: require('../assets/ProfilePhoto3.jpg')
    },
    {
        id: 3,
        title: 'Rabbit food',
        description: 'Duis aute irure dolor in reprehenderite...',
        image: require('../assets/ProfilePhoto4.jpg')
    },
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList 
            data={massages} 
            keyExtractor={massage => massage.id.toString()} 
            renderItem={({ item }) => 
            <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}/>}/>
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;