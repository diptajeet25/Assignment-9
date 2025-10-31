import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 text-center rounded-2xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-300 mb-6">Get the latest game updates, news, and exclusive offers right in your inbox!</p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-2/3 px-4 py-2 rounded-lg text-black bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
