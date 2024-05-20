import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center space-y-8">
      <header className="space-y-6 text-center text-lg">
        <h1 className="text-7xl font-bold tracking-tight">
          Schedule posts for Discord
        </h1>
        <p>Save. Schelude. Submit. We will handle the rest.</p>
      </header>
      <div className="space-x-5">
        <Button>Start for free</Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </main>
  );
}
