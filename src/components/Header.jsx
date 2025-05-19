import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-red-600 font-serif">
                        <Link href="/">SavoryBite</Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <Link href="/" className="hover:text-red-600 transition">Home</Link>
                        <Link href="/about" className="hover:text-red-600 transition">About Us</Link>
                        <Link href="/recipes" className="hover:text-red-600 transition">Recipes</Link>
                        <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
                        <Link
                            href="#order"
                            className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                        >
                            Order Online
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
