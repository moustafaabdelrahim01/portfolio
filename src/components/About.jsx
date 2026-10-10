import { MapPin, Languages, GraduationCap, Code2 } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Based in", value: "Warsaw, Poland" },
  { icon: Code2, label: "Main stack", value: " HTML, CSS ,React · JavaScript , typescript" },
  { icon: GraduationCap, label: "Currently", value: "IT & Computer Science" },
  {
    icon: Languages,
    label: "Languages",
    value: "5 languages",
    note: "Arabic · English · Polish · Italian · Russian",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
        <img
          src="/photo.jpeg"
          alt="Portrait of Moustafa"
          className="w-32 h-32 sm:w-50 sm:h-50 rounded-2xl object-cover border border-line"
        />

        <div>
          <p className="text-xs uppercase tracking-wide text-accent mb-2">
            A little about me
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">Beyond the code.</h2>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
        <p>
          Hi, I'm Moustafa — a Junior Front-End Developer based in Warsaw,
          Poland, and an IT and Computer Science student at the University of
          Technology and Arts in Applied Sciences (UTA).
        </p>
        <p>
          I'm passionate about building modern, responsive, and user-friendly
          web interfaces using HTML , CSS , React, JavaScript, and Tailwind CSS. Through
          academic and personal projects, I'm continuously developing my
          technical skills and exploring new ways to turn ideas into practical
          digital experiences.
        </p>
        <p>
          As a multilingual communicator with experience in customer service and
          technical support, I bring strong problem-solving, adaptability, and
          communication skills to my work. I'm always eager to learn, grow as a
          developer, and contribute to meaningful projects.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facts.map(({ icon: Icon, label, value, note }) => (
          <div
            key={label}
            className="bg-card border border-line rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <Icon size={18} className="text-accent mb-3" />
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
            {note && <p className="mt-1 text-xs text-gray-500">{note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}