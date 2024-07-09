

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import { AutocompleteComponent } from "./_components/autocomplete";
import { ModeToggle } from "@/components/toggle-theme";

export default function Home() {

  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center space-y-2 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center">
        Shadcn Address Autocomplete
      </h1>
      <p className="text-center text-secondary-foreground">
        An address autocomplete component using Google Places API and shadcn components.
      </p>
      <div className="flex items-center gap-3 py-5">
        <Button>
          <Github className="size-4 mr-2" />
          Github
        </Button>
        <ModeToggle />
      </div>
      <div className="w-1/2 pt-7 space-y-1">
        <Label htmlFor="address">Address</Label>
        <AutocompleteComponent />
        <p className="text-xs text-muted-foreground">
          This uses mock data. Go to github to see how to use the real API.
        </p>
      </div>
    </main>
  );
}
