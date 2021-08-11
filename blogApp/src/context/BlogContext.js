import createDataContext from './createDataContext';
import jsonServer from '../api/json-Server';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
      break;
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'get_blogposts':
      return action.payload;
    default:
      return state;
      break;
  }
};
const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({type: 'get_blogposts', payload: response.data});
  };
};
const addBlogPost = () => {
  return async (title, content, callBack) => {
    await jsonServer.post('/blogposts', {title, content});
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    dispatch({type: 'delete_blogpost', payload: id});
    await jsonServer.delete(`/blogposts/${id}`);
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content});
    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    if (callBack) {
      callBack();
    }
  };
};
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [],
);
