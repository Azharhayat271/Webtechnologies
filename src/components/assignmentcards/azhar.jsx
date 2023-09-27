import React from 'react';

const AssignmentCard = ({
  title,
  description,
  imageSrc,
  submissionLink,
  professorName,
  submissionDate,
}) => {
    const cardStyle = {
        border: '1px solid pink', // Add a black border
      };
  return (
    <div className="p-10 max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden rounded-sm border-black">
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
      <div className="px-4 py-3">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-4 py-3">
        <a
          href={submissionLink}
          className="mt-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Go to Assignment
        </a>
        <p className="text-gray-600 text-sm mt-2">Professor: {professorName}</p>
        <p className="text-gray-600 text-sm mt-1">Due Date: {submissionDate}</p>
      </div>
    </div>
  );
};

export default AssignmentCard;
