// actions.js

// Action Types
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

// Action Creators
export const addPost = (postContent) => ({
  type: ADD_POST,
  payload: postContent,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const ADD_TEXT = 'ADD_TEXT';

export const addText = text => ({
  type: ADD_TEXT,
  payload: text,
});
