import React, { 
    Component
} from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({ onPress }) => {
    const { buttonText, buttonStyle } = styles;
    return (
        <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
            <Text style={ buttonText }>Buy Now</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderColor: '#114B5F',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#114B5F',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export default Button;