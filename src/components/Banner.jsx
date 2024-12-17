import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-r from-[#1F2937] to-[#3B82F6] px-4 h-[500px] text-center text-white overflow-hidden">
      
      {/* Decorative Image with animation */}
      <motion.img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl17jMY8lSu0BlINeuyaC7ATU_AuZcQBvqB6V8fEDoUQGzW-9eWEg041_wJv0v0EX_3ww&usqp=CAU" // Replace with your image URL
        alt="Decorative Image"
        className="top-1/2 z-0 absolute opacity-40 mx-auto max-w-md transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 5, -5, 0], // Slight rotation effect
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Background Decorative Circles */}
      <motion.div
        className="top-10 left-10 absolute bg-purple-400 opacity-20 rounded-full w-32 h-32"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="right-20 bottom-20 absolute bg-yellow-400 opacity-20 rounded-full w-20 h-20"
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bottom-10 left-1/4 absolute bg-pink-400 opacity-20 rounded-full w-14 h-14"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 space-y-6"
      >
        {/* Title */}
        <motion.h1
          className="font-bold text-4xl md:text-6xl leading-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Discover Endless Opportunities 🌟
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-100 text-lg md:text-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Connect with top companies and land your dream job 🚀
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center space-x-6 mt-4">
          <motion.a
            href="/jobs"
            className="bg-[#F59E0B] hover:bg-[#FFB347] shadow-md px-6 py-3 rounded-full font-semibold text-[#1F2937] transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Jobs
          </motion.a>
          <motion.a
            href="/register"
            className="border-2 border-white hover:bg-white px-6 py-3 rounded-full font-semibold text-white hover:text-[#1F2937] transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Lines for Design */}
      <motion.div
        className="top-1/2 left-0 absolute bg-white opacity-20 w-1/2 h-1"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="right-0 bottom-1/3 absolute bg-white opacity-20 w-1/2 h-1"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Banner;
