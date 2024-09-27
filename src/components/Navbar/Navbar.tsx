"use client";

import { useState } from "react";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import Hero from "../Hero/Hero"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header
        className={`flex h-16 w-full items-center font-roboto text-xl justify-between px-4 md:px-6 transition-colors duration-300 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Logo and Navigation */}
        <Link
          href="/"
          className="flex items-center text-headcolor font-extrabold text-2xl"
        >
          SH!V!
          <span className="sr-only">My Portfolio</span>
        </Link>

        {/* Main Navigation for Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/about"
                className="text-sm font-medium hover:underline hover:text-[#E85A71] underline-offset-4 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="text-sm font-medium hover:underline hover:text-[#E85A71] underline-offset-4"
                prefetch={false}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="text-sm font-medium hover:underline hover:text-[#E85A71] underline-offset-4"
                prefetch={false}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/certificate"
                className="text-sm font-medium hover:underline hover:text-[#E85A71] underline-offset-4"
                prefetch={false}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium hover:underline hover:text-[#E85A71] underline-offset-4"
                prefetch={false}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle and Mobile Navigation */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <Toggle
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className={`rounded-full p-2 transition-colors ${
              isDarkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Toggle>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                <Link
                  href="/about"
                  className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer"
                >
                  About
                </Link>
                <Link
                  href="/project"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Projects
                </Link>
                <Link
                  href="/resume"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Resume
                </Link>
                <Link
                  href="/certificate"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Certifications
                </Link>
                <Link
                  href="/contact"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <hr />
    </>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
