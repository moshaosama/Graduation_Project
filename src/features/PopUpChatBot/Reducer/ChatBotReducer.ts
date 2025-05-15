import { createSlice } from "@reduxjs/toolkit";
import { fetchStartChat } from "../Actions/StartChat";
import { fetchSendMessage } from "../Actions/SendMessage";

const initialState = {
  Message: "",
  loading: false,
  language: "",
  response: "",
  session_id: "",
  error: "",
};

const ChatBotReducer = createSlice({
  name: "ChatBot",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStartChat.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStartChat.fulfilled, (state, action) => {
      state.loading = false;
      state.session_id = action.payload.session_id;
      state.language = action.payload.language;
      state.response = action.payload.response;

      // أضف السطر ده لحفظ البيانات
      window.localStorage.setItem(
        "SessionID",
        JSON.stringify({
          session_id: action.payload.session_id,
          response: action.payload.response,
        })
      );
    });
    builder.addCase(fetchStartChat.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchSendMessage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSendMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.Message = action.payload.message;
    });
    builder.addCase(fetchSendMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default ChatBotReducer.reducer;
