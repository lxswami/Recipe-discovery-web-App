import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-bold text-red-600 font-serif">SavoryBite</h2>
            <p className="mt-2 text-sm text-gray-600">
              A taste of tradition and flavor in every bite. Join us for a memorable dining experience.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#menu" className="hover:text-red-600">Menu</Link></li>
              <li><Link href="#reservations" className="hover:text-red-600">Recipes</Link></li>
              <li><Link href="#about" className="hover:text-red-600">About</Link></li>
              <li><Link href="#contact" className="hover:text-red-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-2">Contact</h3>
            <p className="text-sm">123 Foodie St, Flavor Town</p>
            <p className="text-sm">Email: hello@savorybite.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SavoryBite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
