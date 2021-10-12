import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import styles from './Style'

const Dummy = () => {
    return(
        <View>
            <Text style={styles.Text}>
                Dummy Test
            </Text>
            <TouchableOpacity style={styles.button}><Text>IT'SA BUTTON</Text></TouchableOpacity>
        </View>
    )
}

const shadow = {
    shadowColor: 'blue',
    shadowRadius: 20,
    shadowOpacity: 10,
    elevation: 20,
    shadowOffset: {
      width: 10,
      height: 10
    }
  }

export default Dummy