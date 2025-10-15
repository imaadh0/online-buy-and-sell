"use client";

import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "how-it-works", label: "How it Works" },
    { id: "about-us", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between xl:justify-center">
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Centered pill navbar */}
            <div className="hidden xl:flex items-center justify-center h-14 rounded-full border border-[#234C6A]/50 bg-transparent px-8 sm:px-10 w-[560px] md:w-[680px] lg:w-[760px]">
              <ul className="flex items-center" role="menubar">
                {navItems.map((item) => {
                  const isActive = activeLink === item.id;
                  return (
                    <li key={item.id} role="none">
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveLink(item.id);
                          scrollToSection(item.id);
                        }}
                        className={`mx-4 px-4 h-9 inline-flex items-center text-base whitespace-nowrap font-semibold rounded-md transition-transform duration-150 ${
                          isActive
                            ? `${
                                item.id === "home"
                                  ? "text-[#1B95C6]"
                                  : "text-[#234C6A]"
                              } font-semibold`
                            : "text-gray-700 hover:text-[#234C6A]"
                        } hover:scale-105`}
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Get Started on the right of pill (still centered as a group) */}
            <button
              onClick={() => scrollToSection("get-started")}
              className="hidden xl:block text-[#234C6A] hover:text-[#0F8BC2] font-semibold text-base transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-gray-700 hover:text-[#234C6A] p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`xl:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-[#234C6A] p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-6 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const isActive = activeLink === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLink(item.id);
                        scrollToSection(item.id);
                      }}
                      className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-colors ${
                        isActive
                          ? "bg-[#234C6A]/10 text-[#234C6A]"
                          : "text-gray-700 hover:bg-gray-100 hover:text-[#234C6A]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Get Started Button in Mobile Menu */}
            <button
              onClick={() => scrollToSection("get-started")}
              className="mt-8 w-full bg-gradient-to-r from-[#1890B2] to-[#1F6B8A] hover:from-[#1F6B8A] hover:to-[#1890B2] text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
