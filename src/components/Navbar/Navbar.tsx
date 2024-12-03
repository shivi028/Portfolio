"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <>
      <header className="flex h-16 w-full items-center font-roboto text-xl justify-between px-4 md:px-6 bg-white text-black transition-colors duration-300">
        {/* Logo and Navigation */}
        <Link
          href="/"
          className="flex items-center text-headcolor font-extrabold text-2xl hover:cursor-pointer"
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
            <li>
              <Link
                href="/submission"
                className="text-sm text-blue-800 font-bold  hover:underline hover:text-[#E85A71] underline-offset-4"
                prefetch={false}
              >
                Data Science Submission
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation*/}
        <div className="flex items-center gap-4">
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

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
