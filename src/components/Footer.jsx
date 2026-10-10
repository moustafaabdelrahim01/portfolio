export default function Footer() {
  return (
    <footer className="border-t border-line mt-10">
      <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-wrap justify-between gap-2">
        <p>© {new Date().getFullYear()} Moustafa. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}