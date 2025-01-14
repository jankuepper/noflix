import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { SignInForm } from "./components/sign-in.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/login" element={<App />} />
    </Routes>
  </BrowserRouter>
);
