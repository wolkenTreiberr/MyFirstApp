import React from 'react';
import { Text } from 'react-native';

import Appstyles from './Appstyles';

function AppText({children, style}) {
    return (
        <Text style={[Appstyles.text, style]}>{children}</Text>
    );
}

export default AppText;
