import Link from "next/link";

const navItems = [
  { href: "#hero", label: "Accueil" },
  { href: "#section-2", label: "Section 2" },
  { href: "#section-3", label: "Section 3" },
  { href: "#section-4", label: "Section 4" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-tight text-neutral-900"
        >
          MIND
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1 sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
