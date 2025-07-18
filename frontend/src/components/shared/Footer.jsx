import React from "react";

const Footer = () => {
  return (
    <footer className="from-black  via-purple-700 to-black text-white py-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo & Copyright */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">Job Hunt</h2>
            <p className="text-sm text-gray-200 mt-2">
              © 2024 Job Hunt. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <a href="/" className="hover:text-yellow-300 transition-all">
              Home
            </a>
            <a href="/jobs" className="hover:text-yellow-300 transition-all">
              Browse Jobs
            </a>
            <a href="/contact" className="hover:text-yellow-300 transition-all">
              Contact Us
            </a>
            <a href="/about" className="hover:text-yellow-300 transition-all">
              About Us
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://facebook.com"
              className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-400 mt-6 pt-4 text-center text-sm text-gray-300">
          Designed with ❤️ by JobQuest Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
