import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  StatusBar,
} from 'react-native';
import {Context} from '../context/BlogContext';

import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });

    return listener;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.accentColor} />
      <FlatList
        keyExtractor={blogPosts => blogPosts.title}
        data={state}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.blogContainer}>
                <Text style={styles.blogText}>{item.title}</Text>
                {/* <Text style={styles.blogText}>{item.id}</Text> */}
                <TouchableOpacity style={styles.icon}>
                  <Icon
                    onPress={() => deleteBlogPost(item.id)}
                    name={
                      Platform.OS === 'ios' ? 'trash-outline' : 'trash-sharp'
                    }
                    color={COLORS.secondacc}
                    size={27}
                    backgroundColor={COLORS.primaryColor}></Icon>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          backgroundColor: COLORS.primaryColor,
          width: '100%',
          height: '2%',
        }}></View>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondacc,
  },
  blogContainer: {
    marginTop: 9,
    marginHorizontal: 12,
    borderRadius: 1,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.secondpri,
    borderColor: COLORS.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowColor: COLORS.accentColor,
  },
  blogText: {
    flex: 2,
    flexWrap: 'wrap',
    fontSize: 22,
    color: 'black',

    // textDecorationLine: 'underline',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.try,
  },
});
