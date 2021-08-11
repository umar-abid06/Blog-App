import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

import COLORS from '../constants/colors';

const BlogForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        placeholder="content"
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        color={COLORS.secondacc}
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};
BlogForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};
export default BlogForm;

const styles = StyleSheet.create({
  form: {
    margin: 20,
    paddingBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderColor: 'black',
  },
  label: {
    fontSize: 18,
  },
});
