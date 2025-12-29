export default function Project() {
  return (
    <section id="projects" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects where I focused on clean UI, responsiveness,
            and modern frontend best practices.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl p-8 bg-dark/60 hover:border-primary transition">

          {/* Project Title */}
          <h3 className="text-2xl font-semibold text-primary mb-3">
            Live Cricket Dashboard
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            A real-time cricket scoreboard UI built using React and Tailwind CSS.
            This project focuses on component-based architecture, clean layout,
            and responsive design to deliver a smooth user experience across
            devices.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["React", "JavaScript", "Tailwind CSS", "Vite"].map((tech) => (
              <span
                key={tech}
                className="text-sm border border-white/10 px-3 py-1 rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-6">
            <a
              href="https://cricket-scoreboard-react.vercel.app/"
              target="_blank"
              className="bg-primary text-black px-6 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/thenameisdhivakar"
              target="_blank"
              className="border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
