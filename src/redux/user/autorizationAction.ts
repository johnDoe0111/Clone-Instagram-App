import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { attachToken, baseService, fillToken } from "../../api/baseServise";

export const autorization = createAsyncThunk(
  "autorization",
  async (userData: { username: string; password: string }) => {
    const { data } = await baseService.post("/user/sign-in", {
      username: userData.username,
      password: userData.password,
    });

    fillToken(data.token);
    attachToken(data.token);

    return data;
  }
);

export const checkAutorization = createAsyncThunk(
  "checkAutorization",
  async () => {
    const token = Cookies.get("user");
    attachToken(token as string);

    const { data } = await baseService.get("/user");

    return data;
  }
);
