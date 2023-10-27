import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "@pages/NoPage";
import Home from "@pages/Home.tsx";
import Layout from "./Layout.tsx";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
