import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddSeason } from "./forms/addSeason";
import { AddEpisode } from "./forms/addEpisode";

export function Dashboard() {
  return (
    <div className="h-dvh flex flex-col place-items-center justify-center">
      <Tabs defaultValue="episode" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="season">Season</TabsTrigger>
          <TabsTrigger value="episode">Episode</TabsTrigger>
        </TabsList>
        <TabsContent value="season">
          <Card>
            <CardHeader>
              <CardTitle>Season</CardTitle>
              <CardDescription>Add a new season.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <AddSeason />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="episode">
          <Card>
            <CardHeader>
              <CardTitle>Episode</CardTitle>
              <CardDescription>Add a new episode.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <AddEpisode />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
