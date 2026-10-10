import { smoothScrollTo } from "../utils/smoothScroll";

const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <nav className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("top");
          }}
          className="font-bold text-lg"
        >
        Moustafa Abdelrahim
        </a>

        <ul className="flex gap-4 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.id);
                }}
                className="hover:text-accent transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}