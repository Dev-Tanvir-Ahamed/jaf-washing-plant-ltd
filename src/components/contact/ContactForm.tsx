"use client";

import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-green-600">HOW TO FIND</h2>

          <div className="space-y-6">
            {/* Office Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-600 text-white rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  OFFICE ADDRESS
                </h3>
                <p className="text-gray-600">
                  Holding No: 8/2/A, Road No: 21, Shyampur, Dhaka-1204.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-600 text-white rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">PHONE</h3>
                <p className="text-gray-600">+8801999027882</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-600 text-white rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  EMAIL ADDRESS
                </h3>
                <p className="text-gray-600">info@jafwashing.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="bg-green-600 p-3 text-white hover:bg-green-700 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="bg-green-600 p-3 text-white hover:bg-green-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl text-green-600">
              Feel free to contact us anytime with any questions that you have.
            </h2>
            <p className="text-xl text-green-600">
              We are here to help every step of the way!
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Your message *"
              rows={8}
              className="w-full px-4 py-3 rounded border border-gray-200 focus:border-green-600 focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded transition-colors font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
