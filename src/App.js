import "../src/sb-admin-2.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Incomelist from "./Incomelist";
import Expenselist from "./Expenselist";
import Addincome from "./Addincome";
import Addexpense from "./Addexpense";
import Dashboard from "./Dashboard";
import Expenseedit from "./Expenseedit";
import Incomeedit from "./Incomeedit";
import Login from "./Login";
import Register from "./Register";
import Portal from "./Portal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/portal" element={<Portal/>}>
          <Route path="dashboard" element={<Dashboard/>} />

          <Route path="incomelist" element={<Incomelist/>} />
          <Route path="expenselist" element={<Expenselist/>} />
          <Route path="expenselist/edit/:id" element={<Expenseedit/>} />
          <Route path="incomelist/edit/:id" element={<Incomeedit/>} />
          <Route path="addincome" element={<Addincome/>} />
          <Route path="addexpense" element={<Addexpense/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
