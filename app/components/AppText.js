import React from 'react';
import { Text } from 'react-native';

import Appstyles from './Appstyles';

function AppText({children}) {
    return (
        <Text style={Appstyles.text}>{children}</Text>
    );
}

export default AppText;
