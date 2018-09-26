import React, { Component } from 'react';   

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
    const Header = (props) => {
        const { 
            headerTxt,
            headerContain
         } = styles;
        return (
            <View style={ headerContain }>
                <Text style={ headerTxt }>{ props.headerText }</Text>
            </View>
        );  
    };

    const styles = {
        headerContain: {
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomWidth: 2,
            borderColor: '#e4e4e4',
        },
        headerTxt: {
            fontSize: 20,
            fontWeight: 'bold', 
        }
    };

export default Header;

//  Prop 3 step guide -> props can make components more reusable
// Step 1 - identify var or val that we want to give the parent component   
// Step 2 - provide a reference - give a props object
// Step 3 - Replace the content