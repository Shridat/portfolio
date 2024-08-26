// src/components/Education.js
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'California State University, Fullerton',
    duration: '2022 - 2024',
    description: 'Specialized in machine learning, data analysis, and software engineering.'
  },
  {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Shivaji University',
    duration: '2017 - 2021',
    description: 'Focused on software development, algorithms, and data structures.'
  },
  // Add more education as needed
];

const Education = () => {
  return (
    <Fade>
    <section id="education" className="p-8 bg-background text-text">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Education</h2>
        <div className="relative">
          <div className="border-l-4 border-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {education.map((edu, index) => (
            <div key={index} className={`mb-8 pl-8 ${index % 2 === 0 ? 'md:pl-0 md:pr-8' : 'md:pr-0 md:pl-8'}`}>
              <div className={`relative md:w-1/2 md:mx-auto md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                  <FaGraduationCap className={`text-primary mb-2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`} size={32} />
                  <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-base text-gray-400">{edu.duration}</p>
                  <p className="text-base mt-2">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Education;
