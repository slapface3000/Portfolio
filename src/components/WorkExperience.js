import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tantraniketan",
      role: "Intern - Robotics and IoT",
      duration: "6 weeks",
      description: "Developed hardware and software interfaces for innovative IoT solutions.",
    },
    {
      company: "Supernova Lightings",
      role: "Intern - IoT for Smart Cities",
      duration: "Ongoing",
      description: "Working on smart city solutions using IoT for energy-efficient systems.",
    },
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <div className="experience-header">
            <h3>{exp.company}</h3>
            <span>{exp.duration}</span>
          </div>
          <h4>{exp.role}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
