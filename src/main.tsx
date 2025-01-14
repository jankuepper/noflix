import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { SignUpForm } from "./components/sign-up.tsx";
import { LoginForm } from "./components/login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);
