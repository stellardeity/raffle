import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import { MainLayout } from "@/shared/ui/layout";

import { SignIn } from "./pages/sign-in";
import { routes } from "./shared/lib/router";
import { store } from "./app/store";
import { theme } from "./shared/ui/theme";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
            <Route key="signin" path="signin" element={<SignIn />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
