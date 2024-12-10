import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Pengantar Blockchain',
    level: 'Pemula',
    description: 'Pelajari dasar-dasar teknologi blockchain dan implementasinya.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3',
    duration: '8 minggu',
    students: '1.2k+ siswa'
  },
  {
    title: 'Smart Contracts Development',
    level: 'Menengah',
    description: 'Kuasai pemrograman smart contracts dengan Solidity.',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3',
    duration: '12 minggu',
    students: '800+ siswa'
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    level: 'Pemula',
    description: 'Pahami konsep dasar AI dan implementasinya dalam bisnis.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3',
    duration: '10 minggu',
    students: '2k+ siswa'
  },
  {
    title: 'Machine Learning Advanced',
    level: 'Lanjutan',
    description: 'Pelajari teknik machine learning tingkat lanjut.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3',
    duration: '16 minggu',
    students: '500+ siswa'
  },
];

export default function Courses() {
  return (
    <div className="relative bg-gray-100 py-24 sm:py-32" id="courses">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden bg-gradient-to-r from-indigo-100 to-white opacity-30">
          <svg
            className="absolute inset-0 h-full w-full"
            fill="none"
            viewBox="0 0 800 800"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kursus Unggulan</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Pilih kursus sesuai dengan minat dan tingkat kemampuan Anda
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                      {course.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-base text-gray-600">{course.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-x-6 text-sm text-gray-600">
                  <div className="flex items-center gap-x-1">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-x-1">
                    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {course.students}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}