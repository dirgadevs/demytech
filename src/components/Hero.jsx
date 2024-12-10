import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative isolate">
      {/* Background pattern */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F46E5" />
              <stop offset={1} stopColor="#80CAFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden sm:mb-8 sm:flex sm:justify-center"
            >
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Mulai perjalanan teknologi Anda bersama kami.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Pelajari lebih lanjut <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Platform E-Learning Blockchain & AI Terdepan di Indonesia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Pelajari teknologi terkini melalui kursus online, webinar, dan dapatkan sertifikasi resmi
              untuk meningkatkan karir Anda di era digital.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Mulai Belajar
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}