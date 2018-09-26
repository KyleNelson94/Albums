import React, { Component } from 'react';   
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

class AlbumList extends Component {
    // class level property -> initial base state -> add albums into the brackets to add it to the initial state
    state = { albums: [] }; // only use 'state = ' for initialising only
    // We want the list to show on load
    componentWillMount() {
        // console.log('component will mount on albumlist'); ctrl + M and click remote js debug option -> inspect and enter console to debug app
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data })); // http request to fetch data which returns a promise -> array full of objects
    }
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
        // to enhance performance you need to add a key property -> Key property must be unique -> 2 it must be the same value across all the rerenders of the list
        //{album.title}
        // propertyName={variable} = album={album} => no tie between property name or variable
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
// Don't require semicolons for classlist components

export default AlbumList;

// Functional Component 
// Used for presenting static Data
// Can't handle fetching data
// Easy to write
// const Header = () => {
//  return <Text>Hello World</Text>
// }
// vs Classlist Component
// Used for dynamic source of Data
// Handles any data that could change (fetchig data, user events)
// knows when it gets erendered to the device (useful for data fetching)
// More code to write
// class Header extends Component {
//  render() {
//      return <Text>Hello World</Text>
// }
// }
// for http request install axios and import to use this library -> to install npm install --save axios
// Status 200 in console means request was successful 
//  setState in built function - 

// Rules of State
// Definition of state : a plain JS object used to record and respond to user truggered events 
// When you need to update what a component shows  call: this.setState
// ONLY CHANGE STATE WITH this.setState -> DO NOT DO THIS.STATE