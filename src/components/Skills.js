import React from "react";
import { FaNode} from 'react-icons/fa';
import { DiDjango, DiJavascript, DiPython} from "react-icons/di";
import PyTorchIcon from './pytorch.svg';
import TensorflowIcon from './tensorflow.svg';
import CppIcon from './cpp.svg';
import huggingIcon from './hugging-face.svg';
import reactIcon from './reactjs.svg';
import sqlIcon from './sql.svg';
import mongoIcon from './mongodb.svg';
import fireIcon from './firebase.svg';
import awsIcon from './aws.svg';
import gcIcon from './google-cloud.svg';
import tabIcon from './tableau.svg';
import Fade from 'react-reveal/Fade';
const Skills = ()=>{
    return (
        <Fade>
        <section id="skils" className="p-8">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4"> Technical Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3 mx-3 my-3 mt-3">
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <DiPython  className="text-4xl text-blue-500 animate-bounce" />
                    <span className="text-lg">Python</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <DiJavascript  className="text-5xl text-yellow-500 animate-bounce"/>
                    <span className="text-lg">JavaScript</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={CppIcon} alt="CPP" className="h-10 animate-bounce" />
                    <span className="text-lg">C++</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <FaNode className="text-4xl text-green-700 animate-bounceIn" />
                    <span className="text-lg">NodeJS</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={reactIcon} alt="react" className="h-10 animate-spin"/>
                    <span className="text-lg">ReactJS</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <DiDjango className="text-4xl text-green-700 animate-bounceIn" />
                    <span className="text-lg">Django</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={TensorflowIcon} alt="Tensorflow" className="h-10 animate-fadeIn"/>
                    <span className="text-lg">Tensorflow</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={PyTorchIcon} alt="PyTorch" className="h-10 animate-fadeIn"/>
                    <span className="text-lg">PyTorch</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={huggingIcon} alt="hugging-face" className="h-10 animate-fadeIn"/>
                    <span className="text-lg">Hugging Face</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={sqlIcon} alt="sql" className="h-10 animate-pulse" />
                    <span className="text-lg">SQL</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={mongoIcon} alt="mongodb" className="h-10 animate-pulse"/>
                    <span className="text-lg">MongoDB</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={fireIcon} alt="firebase" className="h-10 animate-pulse"/>
                    <span className="text-lg">Google Firebase</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={tabIcon} alt="tableau" className="h-10 animate-jello"/>
                    <span className="text-lg">Tableau</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={awsIcon} alt="aws" className="h-10 animate-jello" />
                    <span className="text-lg">AWS</span>
                </div>
                <div className="flex items-center space-x-4 p-4 transition-transform transform hover:animate-wiggle">
                    <img src={gcIcon} alt="google" className="h-10 animate-jello" />
                    <span className="text-lg">Google Cloud</span>
                </div>
            </div>  
            </div>
        </section>
        </Fade>
    );
};
export default Skills;