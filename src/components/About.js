// src/components/About.js
import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import Typing from './Typing.js';
import Avatar from 'avataaars';
import resume from './shrinivas-AIML.pdf';

const About = () => {
  return (
    <section id="about" className="p-8 flex flex-col items-center bg-background text-text">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary mb-4 text-center">Hello Everyone...!</h1>
          <div className="text-center">
            <h2 className="text-6xl font-medium font-sans mb-4">SHRINIVAS PATIL</h2>
            <Typing />
            <h3 className="text-lg mt-8">
              I'm dedicated to crafting exceptional applications and solving complex problems. With a Master's degree from CSUF and over a year of professional experience, I specialize in Full-Stack Development, Machine Learning, and Data Science.
            </h3>
          </div>
          <div className="flex justify-center md:justify-start mt-8 space-x-4">
            <a href="https://github.com/shridat" className=" hover:underline">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/shrinivas-patil-70536720b" className="hover:underline">
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <a href={resume} download className="bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-75 transition duration-300">
              Download My Resume
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
        <Avatar
            avatarStyle='Transparent'
            topType='ShortHairShortFlat'
            accessoriesType='Round'
            hairColor='Black'
            facialHairType='BeardLight'
            facialHairColor='Black'
            clotheType='Hoodie'
            clotheColor='PastelOrange'
            eyeType='Happy'
            eyebrowType='UpDown'
            mouthType='Default'
            skinColor='Brown'
        />
        </div>
      </div>
    </section>
  );
};

export default About;
