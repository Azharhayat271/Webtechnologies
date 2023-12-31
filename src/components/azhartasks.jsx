import React from 'react';
import Title from './title';
import Footer from './footer';
import AssignmentCard from './assignmentcards/azhar';
import HTML from './assignmentdata/html.png';
import CustomAvatarImage from './azhar.jpg';


const azhartasks = () => {
  return (
    <div>
     <div className="absolute top-0 right-0 m-4 space-y-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={CustomAvatarImage}
            alt="Custom Avatar"
            className="w-full h-full object-cover"
            title="Azhar Hayat Khan"
          />
        </div>
      </div>
      <Title />
      <div className="font-bold">
        <span className="text-pink-500 mx-2">Weekly</span>
        <span className="text-violet-500 mx-2">Assignments</span>
      </div>
      <div className="flex flex-wrap justify-center">
        <AssignmentCard
          title="Assignment 1"
          description="Make a HTML file in which use all the HTML 5 tags."
          imageSrc={HTML}
          submissionLink="https://azharhayat271.github.io/assignment1/"
          professorName="Dr Mubashir Khatana"
          submissionDate="2023-09-11"
        />
        <AssignmentCard
          title="Assignment 2"
          description="Make a form using the bootstrap css library with all possible input fields."
          imageSrc="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          submissionLink="https://azharhayat271.github.io/assignment2/"
          professorName="Dr Mubashir Khatana"
          submissionDate="2023-09-28"
        />
      </div>
      <Footer />
    </div>
  );
};

export default azhartasks;
