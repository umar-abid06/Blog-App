import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import BlogForm from '../components/BlogForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({route, navigation}) => {
  const bid = route.params?.id;
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === bid);

  return (
    <BlogForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(bid, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
