import React from "react";
import { Gamepad2, Globe2, Download, Users, Target, Mail, Zap, Star, Trophy } from "lucide-react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <div className="bg-white text-gray-800">

        <Navbar></Navbar>
      <div className="max-w-6xl mx-auto text-center my-12">
       
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
          About Gameverse
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Welcome to <Link to="/" className="font-semibold text-blue-600">Gameverse</Link> — 
          your one-stop destination for discovering, downloading, and exploring 
          the world's most exciting games. Whether you love battle royales, RPGs, 
          or simulation adventures, we have got you covered.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
            <Gamepad2 size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Unlimited Games</h3>
            <p className="text-gray-600">
              Access hundreds of premium and free titles from different genres — 
              updated regularly for every kind of gamer.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
            <Download size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast & Secure Downloads</h3>
            <p className="text-gray-600">
              Gameverse ensures high-speed servers and safe links so you can 
              download your favorite games hassle-free.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
            <Users size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Community of Gamers</h3>
            <p className="text-gray-600">
              Join thousands of players sharing reviews, tips, and gameplay 
              experiences to help each other level up!
            </p>
          </div>
        </div>


         <div className="mt-20">
          <Target size={50} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to make gaming accessible to everyone. 
            Gameverse is designed to give players the power to explore 
            the latest releases, classic gems, and hidden indie treasures — 
            all in one place, without limits.
          </p>
        </div>

        <div className="mt-20">
          <Zap size={50} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Why Choose Gameverse?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-md transition">
              <Star size={30} className="text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Curated Collection</h3>
              <p className="text-gray-600">Only the best and most popular titles make it to our library.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-md transition">
              <Trophy size={30} className="text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Top Performance</h3>
              <p className="text-gray-600">Optimized downloads and fast updates for seamless gaming.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-md transition">
              <Globe2 size={30} className="text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Global Access</h3>
              <p className="text-gray-600">Gamers from all over the world, connected through one platform.</p>
            </div>
        </div>
        </div>

        <div className="mt-20 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl py-10 text-white">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-extrabold">500+</h3>
              <p className="text-gray-200">Games Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">10K+</h3>
              <p className="text-gray-200">Active Players</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">100+</h3>
              <p className="text-gray-200">Countries Reached</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Globe2 size={50} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Gameverse, our goal is to build a global hub where gamers from 
            every corner of the world can explore, connect, and experience the 
            thrill of gaming without limits. We believe gaming is not just 
            entertainment — it's a universe.
          </p>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 shadow-sm">
          <Mail size={50} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Join the Gameverse Community</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with new releases, community events, and gaming news.
            Be part of something bigger — be part of Gameverse.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Join Now
          </button>
        </div>

      
      </div>
       <Footer></Footer>
    </div>
  );
};

export default About;
