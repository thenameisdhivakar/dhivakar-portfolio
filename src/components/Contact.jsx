export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I’m open to frontend developer roles, internships, and freelance
            opportunities. If you have a project or an opportunity in mind,
            feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-xl mx-auto border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-primary transition">
          
          <div className="space-y-6 text-center">
            
            {/* Email */}
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
                href="mailto:thenameisdhivakar@gmail.com"
                className="text-lg font-medium hover:text-primary transition"
              >
                thenameisdhivakar@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/thedhivakar"
                target="_blank"
                className="border border-white/10 px-5 py-2 rounded-lg hover:border-primary hover:text-primary transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/thenameisdhivakar"
                target="_blank"
                className="border border-white/10 px-5 py-2 rounded-lg hover:border-primary hover:text-primary transition"
              >
                GitHub
              </a>
            </div>

            {/* CTA */}
            <p className="text-sm text-gray-500">
              I usually reply within 24 hours 🚀
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
