"use client";

import emailjs from "@emailjs/browser";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");

          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-primary_color">
            HOW TO FIND
          </h2>

          <div className="space-y-6">
            {/* Office Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary_color text-white rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  OFFICE ADDRESS
                </h3>
                <p className="text-gray-600">
                  Holding No: 2/8/A, Road No: 21, Shyampur, Dhaka-1204.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary_color text-white rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">PHONE</h3>
                <p className="text-gray-600">+8801718666662</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary_color text-white rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  EMAIL ADDRESS
                </h3>
                <p className="text-gray-600">jafwashing@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="bg-primary_color p-3 text-white hover:bg-violet-700 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="bg-primary_color p-3 text-white hover:bg-violet-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl text-black">
              Feel free to contact us anytime with any questions that you have.
            </h2>
            <p className="text-xl text-black">
              We are here to help every step of the way!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-primary_color focus:outline-none transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-primary_color focus:outline-none transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-primary_color focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-primary_color focus:outline-none transition-colors"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message *"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              required
              className="w-full px-4 py-3 rounded border border-gray-200 focus:border-primary_color focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-primary_color hover:bg-violet-700 text-white px-8 py-4 rounded transition-colors font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
