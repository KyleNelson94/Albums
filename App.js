import React, { 
  Component 
} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
