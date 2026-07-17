import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import "./styles/globals.css";
import { DocumentProvider } from "./context/DocumentContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DocumentProvider>
  <BrowserRouter>
    <ThemeProvider>
      <>
  <App />

  <Toaster
    position="top-right"
    toastOptions={{
      duration: 3500,

      style: {
        background: "#1E293B",
        color: "#fff",
        border: "1px solid rgba(255,255,255,.08)",
      },
    }}
  />
</>
    </ThemeProvider>
  </BrowserRouter>
  </DocumentProvider>
</QueryClientProvider>
  </React.StrictMode>
);