import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
         Portfolio
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-md font-medium">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-primary transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4 text-md">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-primary transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
