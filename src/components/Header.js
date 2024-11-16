import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="greeting">Hi, I'm Caleb 👋</h1>
      <h2 className="subtitle">
        Electronics and Computer Science Engineer passionate about IoT, robotics, and building innovative solutions.
      </h2>
      <a
        href="https://drive.google.com/file/d/1-pIZ6p3XLrCrakWwh8qsqEf9uT67ojLX/view?usp=drive_link" target="_blank" // Replace with the path to your resume file
        download="Caleb_P_Lewis_Resume.pdf"
        className="download-resume"
      >
        Download Resume
      </a>
    </header>
  );
};

export default Header;
