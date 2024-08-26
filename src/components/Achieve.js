import React, { useState, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
/*import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';*/
import Fade from 'react-reveal/Fade';

const achievements = [
  {
    title: 'Published Research Work',
    description: 'Research on machine learning algorithms published in XYZ journal.',
    link: '#',
    icon: '📄',
    //image: image1,
  },
  {
    title: 'Presented Work',
    description: 'Presented findings on data analysis at ABC conference.',
    link: '#',
    icon: '🎤',
    //image: image2,
  },
  {
    title: 'Letter of Recommendation',
    description: 'Received a letter of recommendation from Prof. John Doe.',
    link: '#',
    icon: '✉️',
    //image: image3,
  },
  {
    title: 'Rate My Professor Review',
    description: 'Highly rated on Rate My Professor for teaching excellence.',
    link: '#',
    icon: '⭐',
    //image: image4,
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
  };

  const handleBubbleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: currentIndex * 250,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <Fade>
    <section id="achievements" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
        <div className="relative flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600 focus:outline-none z-10"
          >
            <FaAngleLeft size={24} />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden space-x-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${
                  index === currentIndex ? 'scale-110' : 'scale-90'
                }`}
                style={{ minWidth: '250px' }}
              >
                <img alt={achievement.title} className="w-32 h-32 object-cover rounded-full mb-4" />
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{achievement.title}</h3>
                <p className="text-lg text-gray-400 mb-4">{achievement.description}</p>
                <a href={achievement.link} className="text-green-500 hover:underline">
                  View Details
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600 focus:outline-none z-10"
          >
            <FaAngleRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full focus:outline-none transition-colors ${
                index === currentIndex ? 'bg-green-500' : 'bg-gray-500'
              }`}
              onClick={() => handleBubbleClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Achievements;
