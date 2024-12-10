import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Kursus Online Berkualitas',
    description: 'Materi pembelajaran komprehensif tentang Blockchain, Smart Contracts, AI, dan Machine Learning.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Sertifikasi Resmi',
    description: 'Dapatkan sertifikat yang diakui secara legal untuk meningkatkan kredibilitas Anda.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Webinar & Workshop',
    description: 'Ikuti webinar dan workshop dengan pembicara ahli lokal dan internasional.',
    icon: UserGroupIcon,
  },
  {
    name: 'Tingkatkan Karir',
    description: 'Siapkan diri Anda menghadapi Revolusi Industri 4.0 dan 5.0.',
    icon: ChartBarIcon,
  },
];

export default function Features() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 opacity-50">
          <svg
            className="absolute bottom-0 left-0 h-full w-48 translate-x-1/2 transform  text-white"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Fitur Unggulan</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa Memilih Demy Tech?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami menyediakan solusi pembelajaran teknologi terkini yang komprehensif dan terjangkau.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}