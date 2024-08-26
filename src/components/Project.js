// src/components/Projects.js
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade'
const projects = {
  'Web Development': [
    {
      title: 'Quiz App using ReactJS',
      description: 'A quiz app game to test general knowledge using ReactJs and Firebase.',
      link: '#',
    },
    {
      title: 'E-commerce Website',
      description: 'An e-commerce platform with full shopping cart functionality, built with Python, Django, and MongoDB.',
      link: '#',
    },
    {
      title: 'Expense Tracker Application',
      description: 'An e-commerce platform with full shopping cart functionality, built with Python, Django, and MongoDB. Coming Soon!',
    },
    {
      title: 'Real-time Collaborative Code Editor',
      description: 'An e-commerce platform with full shopping cart functionality, built with Python, Django, and MongoDB. Coming Soon!!',
    },
  ],
  'Data Analysis': [
    {
      title: 'Stock Prediction Analysis',
      description: 'Analyzed stock data to identify trends and improve investment strategies using Python, Pandas and machine learning models.',
      link: 'https://github.com/Shridat/stock-prediction',
    },
    {
      title: 'Walmart Sales Analysis',
      description: 'Performed data analysis on walmart sales and built machine learning model to predict the sales by following trends.',
      link: 'https://github.com/Shridat/Sales-Prediction',
    },
    {
        title: 'Mall Customer Segmentation',
        description: 'Performed customer segmentation analysis using clustering algorithms to enhance marketing efforts.',
        link: 'https://github.com/Shridat/Mall-Customer-Segmentation',
      },
  ],
  'Machine Learning': [
    {
        title: 'Kisaansathi- Pest and Detection APP',
        description: 'Built an application that detects pest and disease on crops and give recommendations to farmers.',
        link: 'https://github.com/Shridat/Kisansathi-prediction',
    },
    {
      title: 'Heart Disease Detection',
      description: 'Developed ML models to predict heart disease based on several health factors. Used SciKit-Learn library to develop Naive Bayes, Logistic regression and SVM.',
      link: 'https://github.com/Shridat/Heart-Disease-Detection',
    },
    {
        title: 'Mobile Price Classification',
        description: 'Developed Random Forest and Xgboost classifier to predict mobile price. Achieved nearly 90% accuracy. Performed Exploratory Data Analysis to ensure right choices of features.',
        link: 'https://github.com/Shridat/Mobile-Price-Clasiification',
    },
    {
        title: 'Intel Image Classification',
        description: 'This project aims to classify images from the Intel Image Classification dataset into six distinct categories: "building", "forest", "glacier", "mountain", "sea", and "street" using vision transformers.',
        link: 'https://github.com/Shridat/Intel-Image-Classification',
      },
  ],
  'NLP': [
    {
      title: 'LeaseSum - Rental Lease Summarizer',
      description: 'Developed an application that summarizes lease document along with estimated rent, deposit. Added feature of law recommendation infavor or against tenant.',
      link: 'https://github.com/Shridat/Rental-Lease-Summarizer',
    },
    {
      title: 'Professor rating/quality prediction (NLP)',
      description: 'Built a LSTM, GAN and RNN for predicting quality and rating of professor from comments fetched from RateMyProfessor.',
      link: 'https://github.com/Shridat/Professor-rating-quality-prediction',
    },
    {
        title: 'Cyberbullying Classification',
        description: 'Developed a machine learning model to automatically detect and classify cyberbullying in social media posts, helping to monitor and mitigate online abusive behavior.',
      },
      {
        title: 'Twitter Sentiment Analysis',
        description: 'Built a sentiment analysis model to evaluate public opinion by analyzing tweets, categorizing them as positive, negative, or neutral. This tool provides real-time insights into public sentiment on various topics and events.',
        link: 'https://github.com/Shridat/Twitter-Sentiment-Analysis',
      },
  ],
};

const getFadeDirection = (index) => {
  const directions = ['left', 'right', 'top', 'bottom'];
  return directions[index % directions.length];
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  return (
    <section id="projects" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="mb-6 flex justify-center">
          {Object.keys(projects).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-lg ${
                activeTab === tab ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects[activeTab].map((project, index) => (
            <Fade
              key={`${activeTab}-${index}`} // Unique key to force re-render
              {...{ [getFadeDirection(index)]: true }}
              delay={index * 200} // Add delay for staggered animation
            >
              <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg window-animation">
                <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
                <div><p className="text-lg text-gray-400 mb-4">{project.description}</p></div>
                <a href={project.link} className="text-green-500 hover:underline">
                  View Project
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;