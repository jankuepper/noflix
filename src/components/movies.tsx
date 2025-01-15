import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { logout } from "@/lib/pocketbase";

export function Movies() {
  // ein Select für Seasons, dann zeigt es die Episoden der Season an
  // ein Logout Button
  // Grid
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <nav className="bg-secondary py-3 px-4 flex items-center justify-between">
        <Link
          className="font-bold text-xl tracking-tight text-black dark:text-white"
          to="/movies"
        >
          NoFlix
        </Link>
        <div className="flex items-center">
          <ModeToggle />
          <Button
            onClick={async () => handleLogout()}
            className="ml-4 px-4 py-2 leading-none"
          >
            Logout
          </Button>
        </div>
      </nav>
      <div></div>
    </>
  );
}
