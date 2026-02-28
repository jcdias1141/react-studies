import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Inicio from "./pages/Inicio";
import Eventos from "./pages/Eventos";
import Props from "./pages/Props";
import Components from "./pages/Components";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="props" element={<Props />} />
          <Route path="components" element={<Components />} />
          <Route path="estado" element={<UseState />} />
          <Route path="efeito" element={<UseEffect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
