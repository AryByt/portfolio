import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { FaFileDownload } from 'react-icons/fa';
import arya from '../assets/icons/ARYA.jpeg';
import resume from '../assets/Arya Bayati-Resume.pdf';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open('mailto:bayatiarya@gmail.com');
  };
  const sidebar_variant = {
    hidden: {
      x: '-20vw',
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div className="sidebar" variants={sidebar_variant} initial="hidden" animate="visible">
      <img src={arya} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Arya<span>Bayati</span>
      </div>
      <div className="sidebar__item sidebar__title">Software Engineer</div>
      <a href={resume} download="Arya Bayati-Resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <FaFileDownload className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/AryByt" target="_blank" rel=" noreferrer">
            <FaGithub className="sidebar__icon mr-3" />
            Github
          </a>
        </div>
        <div className="sidebar__location">
          <HiLocationMarker className="sidebar__icon mr-3" />
          Austin, Texas
        </div>
        <div className="sidebar__item">bayatiarya@gmail.com</div>
        <div className="sidebar__item">(512)-998-6114</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        EMAIL ME
      </div>
    </motion.div>
  );
};

export default Sidebar;
