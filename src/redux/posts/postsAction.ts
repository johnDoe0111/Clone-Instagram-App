import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { attachToken, baseService } from "../../api/baseServise";

export const getPosts = createAsyncThunk("getPosts", async () => {
  const { data } = await baseService.get("/posts");
  const token = Cookies.get("user");
  attachToken(token as string);
  return data;
});

export const addPost = createAsyncThunk(
  "addPost",
  async (formData: FormData) => {
    const token = Cookies.get("user");
    attachToken(token as string);

    const { data } = await baseService.post("/posts", formData);

    return data;
  }
);

export const deletePost = createAsyncThunk("delePost", async (_id: string) => {
  const token = Cookies.get("user");
  attachToken(token as string);

  await baseService.delete(`/posts/${_id}`);

  return _id;
});

export const editPost = createAsyncThunk(
  "editPost",
  async ({ postId, description }: { postId: string; description: string }) => {
    const token = Cookies.get("user");
    attachToken(token as string);

    const { data } = await baseService.patch(`/posts/${postId}`, {
      description,
    });

    return data;
  }
);
