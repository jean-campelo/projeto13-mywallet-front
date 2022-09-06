import GlobalStyles from "../Assets/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Account from "./Account";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}
