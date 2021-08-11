import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../constants/colors';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === route.params?.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.try,
    flex: 1,
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderBottomWidth: 2,
    borderColor: COLORS.accentColor,
    fontSize: 30,
    justifyContent: 'flex-start',
  },
  content: {
    fontSize: 22,
    marginHorizontal: 15,
  },
});
