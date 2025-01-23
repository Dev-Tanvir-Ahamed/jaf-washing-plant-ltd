import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#0B4619] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-200 mb-6">
              JAF Washing Plant Ltd. is one of the most modern washing plant in
              Bangladesh, established in January, 2013
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
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Factory Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    List of Machineries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Our Facilities
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
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
                <div className="w-5 h-5 mt-1 text-green-400">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-200">
                  185, Singair Road, Hemayetpur, Savar, Dhaka-1340, Bangladesh.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 text-green-400">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+8801999027882"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +8801999027882
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 text-primary_color">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:info@almadinawashing.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  info@almadinawashing.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-400">
          <p className="text-center text-gray-300">
            © 2024 Al Madina Washing Plant Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
