import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm font-medium text-neutral-900">MIND</p>
        <nav aria-label="Liens de pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
            <li>
              <Link href="#hero" className="hover:text-neutral-900">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#section-2" className="hover:text-neutral-900">
                Section 2
              </Link>
            </li>
            <li>
              <Link href="#section-3" className="hover:text-neutral-900">
                Section 3
              </Link>
            </li>
            <li>
              <Link href="#section-4" className="hover:text-neutral-900">
                Section 4
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-neutral-500 sm:text-right">
          © {year} MIND. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
