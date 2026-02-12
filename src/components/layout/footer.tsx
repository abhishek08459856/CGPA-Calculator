"use client";

import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="relative mt-24 text-gray-300 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">

        {/* CTA SECTION */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Join Namdapha House{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              WhatsApp
            </span>{" "}
            Community
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
            Get updates, ask questions, and connect with members in our active WhatsApp community.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-white font-medium shadow-[0_0_30px_rgba(34,197,94,0.3)] text-sm md:text-base">
            Join Now
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16" />

        {/* FOOTER GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">

          {/* Column 1 */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Namdapha House</h3>
            <div className="flex gap-4 text-gray-400">
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition" />
              <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition" />
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Visit</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">LinkTree</li>
              <li className="hover:text-white cursor-pointer transition">Certificate Verification</li>
              <li className="hover:text-white cursor-pointer transition">Join WhatsApp Groups</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">Council</li>
              <li className="hover:text-white cursor-pointer transition">Teams</li>
              <li className="hover:text-white cursor-pointer transition">Events</li>
              <li className="hover:text-white cursor-pointer transition">Resource Hub</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">Grade Predictor</li>
              <li className="hover:text-white cursor-pointer transition">Grade Calculator</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">Explore Gallery</li>
              <li className="hover:text-white cursor-pointer transition">Blogs</li>
              <li className="hover:text-white cursor-pointer transition">Credits</li>
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16" />

      </div>
    </footer>
  );
}
