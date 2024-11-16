import React from "react";

const AwardsCertificates = () => {
  const awards = [
    "1st place at Technofest competition (Thakur Polytechnic) for the 'Smart Village' final year project.",
    "Certificate of achievement for 'Smart Village' from Vidhyalankar Polytechnic.",
    "Awards for model making and technical quiz at Tantra Utsav (Thakur Polytechnic).",
    "Demonstrated active participation and commitment to personal development through engagement in Scout activities and athletics events, earning certificates to acknowledge dedication and contribution in these areas.",
  ];

  const onlineCertifications = [
    { platform: "MyCaptain", courses: ["Ethical Hacking", "Race Car Tech", "Android App Development", "Artificial Intelligence", "Game Development", "C/C++ Programming", "Java Programming", "Graphic Design"] },
    { platform: "Infosys Springboard", courses: ["Basics of Python", "Introduction to Machine Learning", "Time Management", "Building Levels of VR"] },
  ];

  return (
    <section>
      <h2>Awards & Certificates</h2>
      <h3>Achievements</h3>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
      <h3>Online Certifications</h3>
      {onlineCertifications.map((cert, index) => (
        <div key={index}>
          <h4>{cert.platform}</h4>
          <ul>
            {cert.courses.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default AwardsCertificates;
