import React from 'react';
import Title from './title';
import Footer from './footer';
import AssignmentCard from './assignmentcards/azhar';
import HTML from './assignmentdata/html.png';
import CustomAvatarImage from './ali.jpg'; // Change the image path accordingly

const alitask = () => {
  return (
    <div>
      <Title />
      <div className="font-bold">
        <span className="text-pink-500 mx-2">Weekly</span>
        <span className="text-violet-500 mx-2">Assignments</span>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Custom Avatar in the top right corner */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={CustomAvatarImage}
            alt="Custom Avatar"
            className="w-full h-full object-cover"
            title="Hover over me for a tooltip!"
          />
        </div>
        <AssignmentCard
          title="Assignment 1"
          description="Make a HTML file in which use all the HTML 5 tags."
          imageSrc={HTML}
          submissionLink="https://alihassan521.github.io/assignment1/"
          professorName="Dr Mubashir Khatana"
          submissionDate="2023-09-11"
        />
        <AssignmentCard
          title="Assignment 2"
          description="Make a form using the bootstrap css library with all possible input fields."
          imageSrc="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          submissionLink="https://alihassan521.github.io/assignment/"
          professorName="Dr Mubashir Khatana"
          submissionDate="2023-09-28"
        />
      </div>
      <Footer />
    </div>
  );
};

export default alitask;
