import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/account", label: "Account" },
];

export function SiteHeader() {
  return (
    <header>
      <Link href="/" aria-label="Nexus Commerce home">
        Nexus Commerce
      </Link>

      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}