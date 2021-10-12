import React from 'react';
// import LottieView from 'lottie-react-native';
import {View, Text, StyleSheet, Image} from 'react-native'

export default class BasicExample extends React.Component {
  render() {
    return (
      <View style={styles.View}>
        <Image style={styles.Image} source={require('../Component/logoinsta.png')}/>
        {/* <LottieView source={require('../Component/lf30_editor_5ztnb5hr.json')} autoPlay loop /> */}
        <Text>Shogun Katsu</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1
  },
  Image: {
    width: 100,
    height: 100
  }
});