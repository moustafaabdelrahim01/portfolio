const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <nav className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg">
         Moustafa Abdelrahim 
        </a>
        <ul className="flex gap-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}