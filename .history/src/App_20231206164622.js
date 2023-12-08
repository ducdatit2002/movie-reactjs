import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import DetailPage from "./page/DetailPage/DetailPage";
import HomeLayout from "./HomeLayout/HomeLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
