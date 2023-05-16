import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, postState } from "../../types/IPosts";
import { addPost, deletePost, editPost, getPosts } from "./postsAction";

const initialState: postState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
      }
    );
    builder.addCase(
      addPost.fulfilled,
      (state, action: PayloadAction<IPost>) => {
        state.posts.unshift(action.payload);
      }
    );
    builder.addCase(
      deletePost.fulfilled,
      (state, action: PayloadAction<IPost["_id"]>) => {
        state.posts = state.posts.filter((i) => i._id !== action.payload);
      }
    );
    builder.addCase(
      editPost.fulfilled,
      (state, action: PayloadAction<IPost>) => {
        state.posts = state.posts.map((i) =>
          i._id === action.payload._id ? action.payload : i
        );
      }
    );
  },
});

export default postsSlice.reducer;
