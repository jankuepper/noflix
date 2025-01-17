import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { isLoggedIn, logout, refresh } from "@/lib/pocketbase";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export function Movies() {
  useEffect(() => {
    handleLoggedInCheck();
    const intervalId = setInterval(async () => {
      handleLoggedInCheck();
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const handleLoggedInCheck = async () => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
      handleLogout();
    } else {
      refresh();
    }
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-dvh flex flex-col w-full h-full">
        <nav className="bg-secondary py-3 px-4 flex items-center justify-between sticky top-0">
          <Link
            className="font-bold text-xl tracking-tight text-black dark:text-white"
            to="/movies"
          >
            NoFlix
          </Link>
          <div>
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-[350px] space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">Current Season:</h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
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

        <div className="flex flex-row w-full h-full flex-wrap justify-center content-around gap-4 my-4">
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
          <Card className="min-w-[482px]">
            <CardHeader className="py-4">
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2Fgalleries%2Ftravel%2Fhubs%2Fthebigpicture%2Fthe-big-picture-photography-competition-round-399%2Fsummary-xlarge.jpg&f=1&nofb=1&ipt=0d0235748ad2c5eee2fbaf68ffd6e28ec9dcdb92b7e2fa053fc69e4d88c3e4be&ipo=images"
                className="rounded-md h-[270px] object-scale-down"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
