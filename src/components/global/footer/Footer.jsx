import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-24 text-slate-300">

      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black text-white mb-2">Join Our Newsletter</h3>
            <p className="text-slate-400">Subscribe to get special offers and once-in-a-lifetime deals.</p>
          </div>
          <div className="w-full max-w-md flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-green-500 transition-colors"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight text-white">
            Grocery<span className="text-green-500">Hub</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Revolutionizing your grocery experience with farm-fresh produce
            and lightning-fast delivery. We bring the harvest directly to your kitchen.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer text-white">
              <Facebook size={20} />
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer text-white">
              <Instagram size={20} />
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer text-white">
              <Twitter size={20} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {["About Us", "Our Services", "Categories", "Latest News", "Deals"].map((link) => (
              <li key={link} className="hover:text-green-500 transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Help & Support</h3>
          <ul className="space-y-4">
            {["Your Account", "Order Tracking", "Shipping Policy", "Refund Policy", "FAQs"].map((link) => (
              <li key={link} className="hover:text-green-500 transition-colors cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-green-500 shrink-0 mt-1" size={18} />
              <p>123 Fresh Lane, Organic Valley,<br />Green City - 400001</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-500 shrink-0" size={18} />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-500 shrink-0" size={18} />
              <p>hello@groceryhub.com</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} GroceryHub. Built with ❤️ for healthy living.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>

    </footer>
  );
}