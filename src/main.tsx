import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { SignUpForm } from "./components/sign-up.tsx";
import { LoginForm } from "./components/login.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { Movies } from "./components/movies.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
