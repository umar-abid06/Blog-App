import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

import COLORS from '../constants/colors';
import BlogForm from '../components/BlogForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);

  return (
    <BlogForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate('Blog'))
      }
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
