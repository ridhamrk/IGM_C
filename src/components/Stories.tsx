import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
const windowHeight = Dimensions.get('window').height;
export const sample = [
  {
    name: 'Lady ',
    image:
      'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    name: 'Flowers',
    image:
      'https://plus.unsplash.com/premium_photo-1673709359598-db2868b023f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    name: 'Beautiful',
    image:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    name: 'Lady ',
    image:
      'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    name: 'Flowers',
    image:
      'https://plus.unsplash.com/premium_photo-1673709359598-db2868b023f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    name: 'Beautiful',
    image:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
];

const storiesData = () => {
  const arrayImg: any = [];
  sample.map((story, index) => {
    arrayImg.push(
      <TouchableOpacity
        key={index}
        onPress={() => console.warn('Story')}
        style={{height: windowHeight / 8.5}}>
        <View style={styles.Imagegap}>
          <Image source={{uri: story.image}} style={styles.sheet} />

          <Text style={{color: 'white', alignSelf: 'center'}}>
            {story.name}
          </Text>
        </View>
      </TouchableOpacity>,
    );
  });
  return arrayImg;
};

const Stories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {storiesData()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sheet: {
    width: 65,
    height: 65,
    borderRadius: 35,
    padding: 10,
    borderColor: '#ff8504',
    borderWidth: 3,
  },
  Imagegap: {
    padding: 4,
    flexDirection: 'column',
  },
});

export default Stories;
