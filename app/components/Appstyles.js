import { StyleSheet } from "react-native"

import colors from "../config/colors";

const Appstyles = StyleSheet.create({

    textHeading: {
        fontSize: 26,
        fontFamily: 'Avenir',
        fontWeight: '900',
    },

    text: {
        fontSize: 20,
        fontFamily: 'Avenir',
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 5,
    },

    buttonText: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

export default Appstyles;