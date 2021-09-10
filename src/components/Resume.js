import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion';
import { tools, languages } from './data/resume_data';

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            General Assembly, Software Engineering Immersive Certificate of Completion Austin
            <p></p>
            <p className="resume-card__name">
              <p>Community College, Computer Science major</p>
              <span>McCallum High School, Diploma</span>
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <p className="resume-card__name">
              General Assembly Software Engineering Fellow 04/2021 – 07/2021
            </p>
            <p className="resume-card__details">
              Created fully responsive front end web applications using HTML, CSS, Javascript,
              React, and third-party API integrations.Developed full-stack applications and designed
              REST APIs with full CRUD functionality using React, Javascript, Node.js, Express,
              Sequelize, PostgreSQL, and Ruby on Rails.Managed team-based projects using agile
              workflow, Git version control and Github Applied knowledge of key languages and
              computer science.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map(language => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map(tool => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
