import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import DetailPage from "./page/DetailPage/DetailPage";
import HomeLayout from "./HomeLayout/HomeLayout";
import Spinner from ".//Spinner/Spinner";
function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="detail/:idPhim" element={<DetailPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
