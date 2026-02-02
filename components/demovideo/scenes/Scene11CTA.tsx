'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import Image from 'next/image';

export default function Scene11CTA() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="/logo-pos-transparent-horizontal.png"
          alt="Say So"
          width={240}
          height={68}
          className="mx-auto"
        />
      </motion.div>

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-3xl md:text-4xl font-hero font-bold text-slate-900 mb-10"
      >
        Win the moment.
      </motion.h2>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="relative"
      >
        {/* Glow */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px 0 rgba(35, 103, 238, 0.3)',
              '0 0 40px 8px rgba(35, 103, 238, 0.15)',
              '0 0 20px 0 rgba(35, 103, 238, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-full"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-8 py-4 text-lg font-semibold text-white shadow-sm">
            Book a Demo
          </div>
        </motion.div>
      </motion.div>

      {/* URL */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="text-slate-400 text-lg mt-8 font-sans"
      >
        asksayso.com
      </motion.p>
    </SafeArea>
  );
}
