import React from "react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        z-10
        mt-auto
        bg-white/5
        backdrop-blur-md
        border-t border-white/5
        py-6
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div
        className="
          max-w-7xl
          mx-auto
          flex flex-col items-center space-y-2
          md:flex-row md:justify-between md:space-y-0
          text-center
          text-gray-300
        "
      >
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} WhyNotCode. All rights reserved.
        </p>

        <div>
          <a
            href="https://tarin-agarwal.web.app/home"
            target="_blank"
            rel="noopener noreferrer"
            className="
              underline
              hover:text-gray-100
              transition-colors
            "
          >
            Tarin Agarwal
          </a>
        </div>

        <div>
          <a
            href="https://github.com/tarinagarwal/why-not-code"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              bg-white/10
              backdrop-blur-sm
              border border-white/20
              rounded-md
              px-4 py-2
              text-sm md:text-base
              text-gray-200
              hover:bg-white/20
              hover:text-white
              transition-colors
            "
          >
            🌟 Star on Github
          </a>
        </div>
      </div>
    </footer>
  );
}
