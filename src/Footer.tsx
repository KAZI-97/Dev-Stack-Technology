// import React from 'react';
import FooterLogo from "./assets/logo-text.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Foot = () => {
  return (
    <footer className="mt-20  text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="lg:pr-10">
            <img
              src={FooterLogo}
              alt="Dev Stack"
              className="w-40 mb-5"
            />

            <p className="leading-7 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <FaXTwitter size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Product
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-slate-200"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-slate-200"
            >
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Foot;