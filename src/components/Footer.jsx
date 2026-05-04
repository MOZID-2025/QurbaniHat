import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4">QurbaniHat</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              A modern livestock marketplace where users can explore cows and
              goats for Qurbani, compare prices, and book animals easily with
              secure authentication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/animals" className="hover:text-yellow-400">
                  All Animals
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-yellow-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-yellow-400">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-sm text-gray-300">
              Email: support@qurbanihat.com
            </p>
            <p className="text-sm text-gray-300">Phone: +880 1234 567 890</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-yellow-400">
                Facebook
              </a>
              <a href="#" className="hover:text-yellow-400">
                Twitter
              </a>
              <a href="#" className="hover:text-yellow-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} QurbaniHat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
