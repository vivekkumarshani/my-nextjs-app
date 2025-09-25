import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationPage() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-gray-50 border-b border-gray-300">
      <header className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/">
            MyPortfolio<span className="text-blue-500">.</span>
          </Link>
        </div>
        <nav className="space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
