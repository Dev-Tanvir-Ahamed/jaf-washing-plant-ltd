import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-violet-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-200 mb-6">
              JAF Washing is one of the most modern washing plant in Bangladesh,
              established in January, 1998
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Menus Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Menus</h2>
            <ul className="flex justify-between">
              <div>
                <li>
                  <Link
                    href="/about-us/management"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/factory-profile"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Factory Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/list-of-machineries"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    List of Machineries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-facilities"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Our Facilities
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link
                    href="/sustainability"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compliance"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product-gallery"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="pr-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 mt-1 text-violet-400">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-200">
                  Holding No: 2/8/A, Road No: 21, Shyampur, Dhaka-1204
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 text-violet-400">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+8801718666662"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +8801718666662
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 text-violet-400">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:jafwashing@gmail.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  jafwashing@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-400">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} JAF Washing All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
