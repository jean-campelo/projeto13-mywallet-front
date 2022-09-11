import GlobalStyles from "../Assets/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DataContext from "../context/dataContext.js";

import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import RegisterDebit from "./RegisterDebit";
import RegisterCredit from "./RegisterCredit";

export default function App() {
  const [body, setBody] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [dataUser, setDataUser] = useState({});

  return (
    <DataContext.Provider value={{ body, setBody, isDisabled, setIsDisabled, dataUser, setDataUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/registerDebit" element={<RegisterDebit />} />
          <Route path="/registerCredit" element={<RegisterCredit />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
