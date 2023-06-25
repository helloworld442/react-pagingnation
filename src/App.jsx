import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import GlobalStyle from "./utils/GlobalStyle";
const Layout = () => {
  return <Outlet />;
};

const RouterMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<MainPage />} />
      <Route path="/paging/:pagingId" element={<MainPage />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterMap />
    </>
  );
}

export default App;
