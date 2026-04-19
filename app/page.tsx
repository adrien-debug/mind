import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="border-b border-neutral-100"
        >
          <div className="mx-auto flex min-h-[min(70vh,720px)] max-w-5xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-500">
              Bienvenue
            </p>
            <h1
              id="hero-title"
              className="max-w-2xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
            >
              MIND
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Espace d’accueil — hero pleine largeur avec titre principal et texte
              d’introduction.
            </p>
          </div>
        </section>

        <section
          id="section-2"
          aria-labelledby="section-2-title"
          className="border-b border-neutral-100 bg-neutral-50"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <h2
              id="section-2-title"
              className="text-2xl font-semibold tracking-tight text-neutral-900"
            >
              Section 2
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              Contenu à personnaliser : proposition de valeur, mission ou premier bloc
              informatif.
            </p>
          </div>
        </section>

        <section
          id="section-3"
          aria-labelledby="section-3-title"
          className="border-b border-neutral-100 bg-white"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <h2
              id="section-3-title"
              className="text-2xl font-semibold tracking-tight text-neutral-900"
            >
              Section 3
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              Deuxième bloc : liste, grille ou argumentaire selon vos besoins.
            </p>
          </div>
        </section>

        <section
          id="section-4"
          aria-labelledby="section-4-title"
          className="bg-neutral-50"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <h2
              id="section-4-title"
              className="text-2xl font-semibold tracking-tight text-neutral-900"
            >
              Section 4
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              Dernière zone avant le pied de page : appel à l’action, contact ou
              synthèse.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
