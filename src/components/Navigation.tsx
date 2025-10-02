"use client";

import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "how-it-works", label: "How it Works" },
    { id: "about-us", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-8">
          {/* Centered pill navbar */}
          <div className="hidden md:flex items-center justify-center h-14 rounded-full border border-[#234C6A]/50 bg-transparent px-8 sm:px-10 w-[560px] md:w-[680px] lg:w-[760px]">
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
            className="text-[#234C6A] hover:text-[#0F8BC2] font-semibold text-base transition-colors"
          >
            Get Started
          </button>

          {/* Mobile Menu (simple icon placeholder) */}
          <button className="md:hidden ml-2 text-gray-700 hover:text-[#234C6A]">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
