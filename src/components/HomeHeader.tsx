import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const HomeHeader = () => {
  return (
    <View style={{backgroundColor: 'black', height: '8%'}}>
      <TouchableOpacity>
        <Image
          style={[
            styles.logo,
            {
              position: 'absolute',
              left: 0,
              width: width / 4.5,
              height: height / 12,
            },
          ]}
          source={require('../assets/images/header-logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[
            styles.logo,
            {
              position: 'absolute',
              right: '13%',
              width: width / 24,
              height: height / 17,
              marginTop: '2%',
            },
          ]}
          source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[
            styles.logo,
            {
              position: 'absolute',
              right: 5,
              width: width / 24,
              height: height / 17,
              marginTop: '2%',
            },
          ]}
          source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    marginLeft: '5%',
  },
});

export default HomeHeader;
