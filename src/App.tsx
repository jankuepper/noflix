import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { isLoggedIn } from "./lib/pocketbase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  isLoggedIn().then((data) => setLoggedIn(!!data));
  return (
    <>
      <Button>{loggedIn ? "yes" : "no"}</Button>
      <Button> Login </Button>
    </>
  );
}

export default App;
