import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center space-y-8">
      <Image
        src="/doodle.png"
        alt="doodle"
        width={500}
        height={500}
        className="rounded-lg"
      />
      <header className="space-y-6 text-center text-lg">
        <h1 className="text-7xl font-bold tracking-tight">
          Schedule posts for{" "}
          <span className="transition-all hover:text-primary">Discord</span>
        </h1>
        <p>Save. Schelude. Submit. We will handle the rest.</p>
      </header>
      <div className="space-x-5">
        <Button>Start for free</Button>
        <Link href="/learn">
          <Button variant="outline">Learn more</Button>
        </Link>
      </div>
    </main>
  );
}
