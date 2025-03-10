import Link from "next/link";


export const Header = () => {
  return (
    <>
      <header
        className="bg-transparent px-6 py-4 flex items-center justify-between"
      >
        <Link href="/"
          className="text-2xl font-bold text-white"
        >
          Rick & Morty
        </Link>
        <nav
          className="flex gap-6"
        >
          <Link href="/characters"
            className="hover:underline"
          >
            Characters
          </Link>
          <Link href="/episodes"
            className="hover:underline"
          >
            Episodes
          </Link>
          <Link href="/locations"
            className="hover:underline"
          >
            Locations
          </Link>
        </nav>
      </header>
    </>
  );
};
