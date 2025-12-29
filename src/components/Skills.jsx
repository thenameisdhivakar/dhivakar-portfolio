export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build clean, responsive, and
            scalable frontend applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          
          {[
            "HTML5",
            "CSS3",
            "JavaScript (ES6)",
            "React",
            "Vite",
            "Tailwind CSS",
            "Git & GitHub",
            "Vercel",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-white/10 rounded-xl py-4 px-3 text-center
                         bg-white/5 hover:border-primary hover:-translate-y-1
                         transition-all duration-300"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
