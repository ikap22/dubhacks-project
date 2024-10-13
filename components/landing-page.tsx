"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="relativeoverflow-hidden h-[90vh] w-full grid place-content-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute h-[90vh] w-full bg-dot-8-s-2-neutral-950"
      />
      <motion.div
        className="bg-gray-100 space-y-6 p-12 text-center rounded-2xl drop-shadow-xl transition duration-700 hover:drop-shadow-2xl border-[1px] border-gray-600"
        initial={{ opacity: 0, y: -800 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <h1 className="text-5xl font-bold">Welcome to BoardWalk!</h1>
        <h2 className="text-3xl font-normal">
          Sign in to post or join an active project
        </h2>
      </motion.div>
    </section>
  );
};

export default LandingPage;
