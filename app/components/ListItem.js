import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import { Swipeable } from 'react-native-gesture-handler';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
       <View style={styles.container}>
           {IconComponent}
           {image && <Image style={styles.image} source={image}></Image>}
           <View style={styles.detailesContainer}>
               <AppText style={styles.title}>{title}</AppText>
               {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
           </View>
       </View>
        </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white,
    },
    detailesContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: '500',

    }
})

export default ListItem;

