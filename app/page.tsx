import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next + MDX</h1>
      <Link href="/docs">Docs</Link>
    </main>
  );
}
