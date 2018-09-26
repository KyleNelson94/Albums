import React, { 
    Component 
} from 'react';
import {
    View,
    Text
} from 'react-native';

const CardSection = (props) => {
    return (
        <View
            style={ styles.SectionContainer }>{ props.children }
        </View>
    );
}
const styles = {
    SectionContainer: {
        position: 'relative',       
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#dddddd',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
};
export default CardSection;