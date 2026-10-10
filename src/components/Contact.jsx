import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "moustafaabdelrahim01@gmail.com";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "moustafaabdelrahim01",
    href: "https://github.com/moustafaabdelrahim01",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Moustafa Abdelrahim",
    href: "https://www.linkedin.com/in/moustafa-abdelrahim-320054413",
  },
];
export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-10">
      <p className="text-xs uppercase tracking-wide text-accent mb-2">
        Contact
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold">Let's work together.</h2>
      <p className="mt-3 text-gray-400">
        I'm open to internships and junior front-end opportunities. Feel free to
        reach out.
      </p>

      <div className="mt-6 grid gap-4">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="bg-card border border-line rounded-2xl p-4 flex items-center gap-4 transition duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <Icon size={20} className="text-accent shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="font-semibold truncate">{value}</p>
            </div>
          </a>
        ))}
      </div>

      <a
        href="/Moustafa-Abdelrahim-CV.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-bg font-medium transition hover:opacity-90"
      >
        <Download size={16} /> Download CV
      </a>
    </section>
  );
}