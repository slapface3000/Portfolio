import React from "react";

const Skills = () => {
  const skillCategories = {
    "Programming Languages": ["C", "C++", "Python", "SQL", "HTML", "CSS", "Bootstrap", "Assembly", "Embedded C"],
    "Software Proficiency": [
      "Visual Studio Code",
      "Arduino IDE",
      "Tinkercad",
      "Keil UVision",
      "Cisco Packet Tracer",
      "PostgreSQL",
      "Proteus",
      "LT Spice",
      "Dev C++",
    ],
    "Hardware & Software Integration": ["Raspberry Pi", "ESP", "Arduino", "OpenCV", "YOLO", "Firebase"],
    "Technical Skills": ["Quick learner", "Adaptable", "Effective communicator", "Team player"],
  };

  return (
    <section>
      <h2>Skills</h2>
      {Object.keys(skillCategories).map((category, index) => (
        <div key={index}>
          <h3>{category}</h3>
          <ul>
            {skillCategories[category].map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
