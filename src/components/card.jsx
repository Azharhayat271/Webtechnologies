import React from 'react';
import myImage from './azhar.jpg';
import Ali from './ali.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'; 


const ProfileCard = () => {
  const navigate = useNavigate(); 
  const handleAssignmentsButtonClick = () => {
    navigate('/assignment-azhar');
  };
  const handleAssignmentsButtonClick1 = () => {
    navigate('/assignment-ali');
  };

  const profile1 = {
    name: 'Azhar Hayat',
    role: '2021-CS-537',
    imageSrc: myImage,
    socialMediaLinks: {
      github: 'https://github.com/Azharhayat271',
      linkedin: 'https://www.linkedin.com/in/azhar-hayat-a44779254/',
    },
  };

  const profile2 = {
    name: 'Ali Hassan',
    role: '2021-CS-521',
    imageSrc: Ali,
    socialMediaLinks: {
      github: 'https://github.com/AliHassan521',
      linkedin: 'https://www.linkedin.com/in/ali-hassan-325906228/',
    },
  };

  const cardStyle = {
    border: '1px solid pink', // Add a black border
  };

  return (
    <div className="flex space-x-20">
      {/* Profile Card 1 */}
      <div className="flex-1 max-w-lg px-50 p-5">
        <div className="card bg-base-100 shadow-xl" style={cardStyle}>
          <div className="card-body flex items-center">
            <figure className="w-24 h-24">
              <img
                src={profile1.imageSrc}
                alt={profile1.name}
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{profile1.name}</h2>
              <p className="text-gray-600">{profile1.role}</p>
              <div className="mt-2">
                <a
                  href={profile1.socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={profile1.socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 btn btn-primary"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
                <button onClick={handleAssignmentsButtonClick} type="button" class=" mt-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Assignments</button>



              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Card 2 */}
      <div className="flex-1 max-w-lg p-5">
        <div className="card bg-base-100 shadow-xl" style={cardStyle}>
          <div className="card-body flex items-center">
            <figure className="w-24 h-24">
              <img
                src={profile2.imageSrc}
                alt={profile2.name}
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{profile2.name}</h2>
              <p className="text-gray-600">{profile2.role}</p>
              <div className="mt-2">
                <a
                  href={profile2.socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 btn btn-primary"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={profile2.socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 btn btn-primary"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
                <button onClick={handleAssignmentsButtonClick1} type="button" class=" mt-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Assignments</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
