import React from "react";
import ReactDOM from "react-dom/client";
//import { createStore } from 'redux'
import { QueryClient, QueryClientProvider } from "react-query";
//import {Provider} from 'react-redux'
//import { configureStore } from '@reduxjs/toolkit'

import App from "./App";
const queryClient = new QueryClient();

//import noteReducer from "./reducers/noteReducer"
// const store = configureStore({
//   reducer: {
//     notes: noteReducer,
//     //filter: filterReducer
//   }
// })

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
