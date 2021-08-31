import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from '../config/colors';
import Appstyles from './Appstyles';

function AppButton({title, onPress, color='secondary'}) {
    return (
        <TouchableOpacity style={[Appstyles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
        <View>
            <Text style={Appstyles.buttonText}>{title}</Text>
        </View>
        </TouchableOpacity>
    );
}

export default AppButton;
