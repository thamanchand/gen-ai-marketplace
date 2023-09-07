import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white p-8 dark:bg-gray-800">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* 1st Column */}
        <div className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent text-center md:text-left font-bold text-blue-600">
          © 2023 AIPixHub
        </div>

        {/* 2nd Column */}
        <div className="text-center">
          <Link
            href="#"
            className=" bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent mx-2 hover:text-purple-600"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent mx-2 hover:text-purple-600"
          >
            Contact Us
          </Link>
        </div>

        {/* 3rd Column */}
        <div className="flex justify-center space-x-4">
          {/* ... Social Media Icons ... */}
        </div>

        {/* 4th Column */}
        <div className="text-center">
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="mx-auto md:mx-0 w-full md:w-auto rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 p-2 px-4 text-white transition duration-300 hover:from-purple-500 hover:to-pink-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
