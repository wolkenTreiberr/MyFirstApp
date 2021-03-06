import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    { 
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.secondary
        }
    },
    { 
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.primary
        }
    }
]

function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
           <View style={styles.container}>
        <ListItem
        title="Franc Wallker"
        subTitle="francwallker@gmail.com"
        image={require('../assets/ProfilePhoto1.jpg')}
        />
           </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => 
        <ListItem
        title={item.title}
        IconComponent={
            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
        }
        />
        }
            />
        </View>
        <ListItem
        title="Log Out"
        IconComponent={
            <Icon name='logout' backgroundColor="#ffe66d"/>
        }
        />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;