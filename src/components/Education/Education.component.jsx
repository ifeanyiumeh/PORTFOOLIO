import React from "react";
import "./Education.styles.scss";
import { EducationList } from "./education";

const Education = () => {
  return (
    <div className="educationContainer ">
      <div className="mainTitleContainer">
        <h2 className="mainTitle">Education</h2>
      </div>
      <div className="items">
        <div className="item">
          <i className="fas fa-school"></i>
          <div className="details">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://carleton.ca/engineering-design/"
              className="title"
            >
              BEng in Electrical Enginering
            </a>
            <div className="content">
              <p>Carleton University</p>
              <p className="date">2016-2021</p>
            </div>
            <p>
              For my capstone project , I worked with a team on the front end
              user interface of an application, which included designing
              componeents, working with the backend team to implement the newly
              designed components, which received an honorary grade (A).{" "}
            </p>
          </div>
        </div>
        <div className="item">
          <i className="fas fa-globe-americas"></i>
          <div className="details">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.udemy.com/"
              className="title"
            >
              Zero To Mastery Coding Bootcamp
            </a>
            <div className="content">
              <p>Online Education</p>
              <p className="date">Ongoing</p>
            </div>
            <p>
              I understand that this is a very fast paced field. So to ensure I
              am always learning and practicing my skills , I take courses on
              platforms such as Udacity , CodeAcademy , Udemy , etc. Check out
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.udemy.com/user/chukwuebuka-beluolisa/"
              >
                {" "}
                My course catalogue
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
