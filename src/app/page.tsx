import { ModeToggle } from "@/components/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";
import { AutocompleteComponent } from "./_components/autocomplete";

export default async function Home() {
	return (
		<main className="min-h-screen w-screen flex flex-col items-center justify-center space-y-2 max-w-4xl mx-auto px-6">
			<h1 className="text-4xl font-bold text-center">
				Shadcn Address Autocomplete
			</h1>
			<p className="text-center text-secondary-foreground">
				An address autocomplete component using Google Places API and shadcn
				components.
			</p>
			<div className="flex items-center gap-3 py-5">
				<Link
					href={
						"https://github.com/NiazMorshed2007/shadcn-address-autocomplete"
					}
					target="_blank"
					className={cn(buttonVariants())}
				>
					<Github className="size-4 mr-2" />
					Github
				</Link>
				<ModeToggle />
			</div>
			<div className="w-full md:w-1/2 pt-7 space-y-1">
				<Label htmlFor="address">Address</Label>
				<AutocompleteComponent />
				<p className="text-xs text-muted-foreground">
					This uses mock data. Go to github to see how to use the real API.
				</p>
			</div>
		</main>
	);
}
