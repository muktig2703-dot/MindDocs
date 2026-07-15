import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import "./styles/globals.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <ThemeProvider>
      <App />

      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  </BrowserRouter>
</QueryClientProvider>
  </React.StrictMode>
);