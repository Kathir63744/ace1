import React, { useState } from 'react';

const TrainerCard = ({ name, role, imageUrl, link }) => {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl">
      {/* Photo Frame */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="p-4 bg-white dark:bg-gray-800 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
      </div>

      {/* Clickable Link */}
      <button
        onClick={() => setShowLink(!showLink)}
        className="absolute bottom-0 left-0 right-0 mx-auto mb-4 px-4 py-2 bg-blue-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        View Profile
      </button>

      {/* Hidden Link */}
      {showLink && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-bold underline"
          >
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default TrainerCard;