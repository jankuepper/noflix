import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { SignInForm } from "./components/sign-in.tsx";
import { LoginForm } from "./components/login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);
