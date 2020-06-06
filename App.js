import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput
} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './app-styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageuri: '',
      ModalVisibleStatus: false,
      searchText: '',
      searchResult: []
    };
  }

  ShowModal(visible, imageURL) {
    this.setState({
      ModalVisibleStatus: visible,
      imageuri: imageURL,
    });
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(120)).map((v, i) => {
      return { id: i, src: `https://unsplash.it/400/400?image=${(i + 1)}` };
    });
    that.setState({
      searchResult: items,
      dataSource: items
    });
  }

  onChangeText = text => {
    if (!text) {
      this.setState({ searchResult: this.state.dataSource });
    }
    this.setState({ searchText: text });
  };

  onIntentSearch = () => {
    const { searchText, dataSource } = this.state;
    const searchResult = dataSource.filter(data => data.src.includes(searchText));
    this.setState({ searchResult });
  };

  clearText = () => {
    this.setState({ searchText: null });
  }

  render() {
    const { ModalVisibleStatus, imageuri, searchResult, searchText } = this.state;
    if (ModalVisibleStatus) {
      return (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={ModalVisibleStatus}
          onRequestClose={() => {
            this.ShowModal(!ModalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{ uri: imageuri }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.ShowModal(!ModalVisibleStatus, '');
              }}>
              <MaterialIcon name={'close'} size={25} color={'#ffffff'} />
            </TouchableOpacity>
          </View>
        </Modal>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            ekAnek Image Gallery
          </Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchText}
              value={searchText || ''}
              placeholder={'Search using intergers'}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onIntentSearch}
            />
            {
              searchText ?
                <TouchableOpacity style={styles.submit} onPress={this.onIntentSearch} >
                  <MaterialIcon name={'send'} size={18} color={'#2196f3'} />
                </TouchableOpacity> : null
            }
          </View>
          <FlatList
            data={searchResult}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity
                  key={item.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    this.ShowModal(true, item.src);
                  }}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri: item.src,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
}