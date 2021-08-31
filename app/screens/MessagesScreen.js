import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMassages = [
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
    const [messages, setMessages] = useState(initialMassages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
       setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList 
            data={messages} 
            keyExtractor={massage => massage.id.toString()} 
            renderItem={({ item }) => 
            <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('tapped on message', item)}
            renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)}/>
            )}
            />}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages(initialMassages)
            }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;