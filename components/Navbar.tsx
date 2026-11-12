"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  const getLinkClass = (href: string, mobile = false) => {
    const isActive = pathname === href;

    return `
      ${mobile ? "text-xs sm:text-sm px-2 sm:px-3" : "text-sm px-3"}
      py-2 rounded-lg whitespace-nowrap transition-colors
      ${
        isActive
          ? "bg-zinc-700 border border-zinc-600 text-white"
          : mobile
            ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
            : "text-zinc-300 hover:text-white hover:bg-zinc-700/50"
      }
    `;
  };

  return (
    <nav className="w-full bg-zinc-800 border-b border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Row */}
        <div className="min-h-16 flex flex-wrap items-center justify-between gap-y-3 py-3 md:py-0">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            MyApp<span className="text-zinc-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={getLinkClass(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="text-sm text-zinc-200 hover:text-white px-3 py-2 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="text-sm bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="w-full md:hidden">
            <div className="flex items-center justify-center gap-2 sm:gap-4 bg-zinc-900/60 border border-zinc-700 rounded-xl p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={getLinkClass(link.href, true)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
