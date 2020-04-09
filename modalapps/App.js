import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Park SHin hye',
    info: 'ini adalah first item detail',
    url:
      'https://media.matamata.com/thumbs/2018/11/09/45815-park-shin-hye-di-drama-memories-of-the-alhambra-soompi/745x489-img-45815-park-shin-hye-di-drama-memories-of-the-alhambra-soompi.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Song Hye Ko',
    info: 'ini adalah first item detail',
    url:
      'https://img-k.okeinfo.net/content/2020/04/01/33/2192278/mengenal-lebih-dalam-sosok-song-hye-kyo-jpdpM8V3sT.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Park Ji Sung',
    info: 'ini adalah first item detail',
    url:
      'https://cdn2.tstatic.net/jabar/foto/bank/images/park-ji-sung_20180112_161037.jpg',
  },
];

function Item({title, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default class App extends Component {
  state = {
    is_visible_modal: false,
    title: '',
    info: '',
    url: '',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              onPress={() =>
                this.setState({
                  is_visible_modal: true,
                  title: item.title,
                  info: item.info,
                  url: item.url,
                })
              }
              title={item.title}
            />
          )}
          keyExtractor={item => item.id}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.is_visible_modal}
          onRequestClose={data => this.setState({is_visible_modal: true})}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {this.state.title}
            </Text>
            <Image
              style={{width: windowWidth * 0.8, height: (windowHeight * 2) / 3}}
              source={{
                uri: this.state.url,
              }}
            />
            <Text>{this.state.info}</Text>
            <TouchableOpacity
              onPress={() => this.setState({is_visible_modal: false})}>
              <View
                style={{
                  marginTop: 40,
                  width: 80,
                  height: 30,
                  backgroundColor: '#909090',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>Kembali</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
