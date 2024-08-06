import React, { useState } from "react";
import "./Skills.css";
import Skillbar from "./Skillbar";

function Skill() {
  const [skills, setSkills] = useState([
    { name: "HTML", percentage: 90, color: "#E44D26" },
    { name: "CSS", percentage: 85, color: "#264DE4" },
    { name: "JavaScript", percentage: 80, color: "#F0DB4F" },
    { name: "React", percentage: 75, color: "#61DBFB" },
    { name: "Photoshop", percentage: 70, color: "#31A8FF" },
    { name: "Adobe XD", percentage: 65, color: "#FF61F6" },
    { name: "Node.js", percentage: 60, color: "#68A063" },
    { name: "WordPress", percentage: 55, color: "#21759B" },
  ]);

  return (
    <div className="full">
      <h1>Skills</h1>
      <p>
        I am a highly passionate and dedicated Front-End Developer with a keen
        eye for design and a strong understanding of user experience. I have a
        deep understanding of HTML, CSS, and JavaScript, and I am proficient in
        building responsive and accessible web applications. I am also familiar
        with Angular and React, and I am always looking for new opportunities to
        learn and grow. I am currently seeking a full-time or part-time job to
        continue my education and work experience. I am always open to new
        opportunities and have the desire to improve my skills and knowledge. I
        am currently working remotely and enjoy the flexibility of remote work.
        I am always looking for opportunities to work with a team and contribute
        to the development of our products. I am also open to discussing
        potential partnerships and collaborations. I am available for freelance
        work, as well as consulting for small projects. If you are interested in
        hiring me
      </p>

      <div className="par">
        <div className="skl">
          <h4> MY FOCUS</h4>
          <hr />
          <ul>
            <li>Ui/Ux Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </div>

        <div className="skills">
          {skills.map((skill, index) => (
            <Skillbar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
