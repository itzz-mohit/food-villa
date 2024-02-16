import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <Link to="/about">
                <h2 className="text-lg font-semibold mb-4">About Us</h2>
              </Link>
              <p className="text-sm">
                Made with ReactJs and Tailwind CSS
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <Link to="/contact"><h2 className="text-lg font-semibold mb-4">Contact</h2></Link>
              <p className="text-sm">Email: mohitbite@gmail.com</p>
              <p className="text-sm">Phone: +91 7091302506</p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <h2 className="text-lg font-semibold mb-4">Social Media</h2>
              <div className="flex space-x-4">
                <Link className="text-sm hover:text-gray-400">
                  Linkedin
                </Link>
                <Link className="text-sm hover:text-gray-400">
                  GitHub
                </Link>
                <Link className="text-sm hover:text-gray-400">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; 2024 Food Villa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
