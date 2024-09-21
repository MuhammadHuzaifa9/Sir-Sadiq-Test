import React from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../utils/constants/Cards';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const CardDetails = () => {
  const { id } = useParams(); 
  const card = cards.find(item => item.id === parseInt(id));

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
      
      <div className="relative w-48 h-48">
        <img src={card.profileImage} alt={card.title} className="w-full h-full  object-cover" />
        <div className="absolute inset-0 bg-pink-200  opacity-30"></div> 
      </div>

      
      <div className="flex flex-col items-center md:items-start space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{card.title}</h1>
        <p style={{color:`rgba(187, 141, 183, 1)`}} className="text-gray-500">{card.profession}</p>
        <p className="text-gray-700 text-center md:text-left">{card.description}</p>

        
        <div className="flex space-x-4 mt-4">
          <a href={card.profileLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={20} />
          </a>
        </div>

        
        <button style={{backgroundColor:`rgba(187, 141, 183, 1)`}} className="mt-6 bg-[rgba(187, 141, 183, 1)] text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-700">
          Buy me a coffee
        </button>
      </div>
    </div>
  );
};

export default CardDetails;


