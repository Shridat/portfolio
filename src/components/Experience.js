// src/components/Experience.js
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const experiences = [
  {
    role: 'Teaching Associate - Data Structure',
    company: 'California State University, Fullerton',
    period: 'Aug 2023 - May 2023',
    responsibilities: [
      'Represented the practical application of C++ for data structure projects, boosting student understanding by 70% and enabling them to solve 80% of medium-level data structure problems.',
      'Adapted interactive teaching methods, leading to a 95% pass rate for 110 students and earning a 5-star review on Rate My Professor for data structures courses.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Script Build',
    period: 'Jun 2021 - Jul 2022',
    responsibilities: [
      'Directed a team to develop an end-to-end machine learning system, achieving 87% accuracy in predictions and enhancing model accuracy by 20%',
      'Engineered an automated machine learning pipeline that enabled faster model training and deployment by 35%',
    ],
  },
];

const Experience = () => {
  return (
    <Fade>
    <section id="experience" className="p-8bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-text bg-animate moveBackground">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Experience</h2>
        <div className="relative">
          <div className="border-l-4 border-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {experiences && experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <div key={index} className={`mb-8 ${index % 2 === 0 ? 'md:pl-0 md:pr-8' : 'md:pr-0 md:pl-8'}`}>
                <div className={`relative md:w-1/2 md:mx-auto md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                    <FaBriefcase className={`text-primary mb-2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`} size={24} />
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <p className="text-lg text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-base text-gray-400">{exp.period}</p>
                    <ul className="list-disc list-inside mt-2 text-base">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="text-gray-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`w-8 h-8 bg-primary rounded-full absolute top-4 ${index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'}`}></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No experience data available</p>
          )}
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Experience;
