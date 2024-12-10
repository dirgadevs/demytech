import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Tentang Kami</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Demy Tech
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Platform e-learning pertama di Indonesia yang berfokus pada edukasi Blockchain dan
                Artificial Intelligence.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                <div>
                  <strong className="font-semibold text-gray-900">Visi:</strong>
                  <p className="mt-2">
                    Menjadi katalis perubahan dalam penguasaan teknologi digital di Indonesia melalui
                    pendidikan yang terjangkau, relevan, dan berdampak.
                  </p>
                </div>
                <div>
                  <strong className="font-semibold text-gray-900">Misi:</strong>
                  <ul className="mt-2 list-disc pl-5 space-y-2">
                    <li>Menyediakan platform pembelajaran yang mudah digunakan oleh semua kalangan.</li>
                    <li>
                      Membantu mencetak tenaga kerja dan wirausahawan yang paham dan mahir Blockchain
                      serta AI.
                    </li>
                    <li>Menyediakan sertifikasi resmi yang mendukung karier dan usaha peserta.</li>
                    <li>
                      Mendorong literasi teknologi di Indonesia agar siap menghadapi Revolusi Industri
                      4.0 dan 5.0.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
            alt="Team working"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}