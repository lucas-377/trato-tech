import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "components/Layout";
import Home from "pages/Home";
import Categoria from "pages/Categoria";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
