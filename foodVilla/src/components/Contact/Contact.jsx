import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Mohit Kumar"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="mohitbite@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
