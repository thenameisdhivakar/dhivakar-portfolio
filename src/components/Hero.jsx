export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Content */}
        <div className="max-w-3xl">


          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Dhivakar</span>
          </h1><p className="text-primary text-bold text-2xl font-medium mb-4">
            FRONTEND DEVELOPER
          </p>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            I specialize in building clean, responsive, and user-friendly
            frontend applications using React, Tailwind CSS, and modern
            JavaScript. Focused on performance, accessibility, and clean UI.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary text-gray-400 px-7 py-3 rounded-lg font-semibold
                         hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="DHIVAKAR.pdf"
              target="_blank"
              className="border border-white/20 px-7 py-3 rounded-lg
                         hover:border-primary hover:text-primary transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

      </div>
    </section>
  );
}
