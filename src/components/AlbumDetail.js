import React, { 
    Component
} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    Linking
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { 
        title,
        artist, 
        thumbnail_image,
        image,
        url 
    } = album;
    const { 
        artistHeaderContent, 
        artistThumb, 
        flexContain,
        artistHeaderTitle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={ flexContain }>
                    <Image 
                        style={ artistThumb } 
                        source={{ uri: thumbnail_image}} 
                    />    
                </View>
                <View style={ artistHeaderContent }>
                    <Text style={ artistHeaderTitle }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image 
                    style={ imageStyle } 
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button  onPress={ () => Linking.openURL( url ) }/>
            </CardSection>
        </Card>
    );
};
const styles = {
    artistHeaderContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    artistHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    artistThumb: {
        height: 50,
        width: 50
    },
    flexContain: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;