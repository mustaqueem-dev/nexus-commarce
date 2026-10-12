import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Nexus Commerce</h1>

      <nav aria-label="Main navigation">
        <ul>
          <li>
            <Link href="/products">Browse products</Link>
          </li>
          <li>
            <Link href="/account">My account</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}