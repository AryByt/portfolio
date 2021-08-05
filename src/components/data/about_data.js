import React from 'react';

import api from '../../assets/icons/api.svg';
import algo from '../../assets/icons/algo.svg';
import computer from '../../assets/icons/computer.svg';
import repair from '../../assets/icons/repair.svg';

const skills = [
  {
    icon: computer,
    title: 'Frontend Development',
    about: [
      'I can build applications using',
      <strong key={1}> HTML CSS Ruby and React.js</strong>,
      'while utilizing Frameworks such as Tailwind and Bootstrap for responsive design',
    ],
  },
  {
    icon: repair,
    title: 'Backend  Development',
    about: [
      'Handle database, server, api using',
      <strong key={1}> mongoDB Express PQL and postgreSQL</strong>,
      'to build full-stack applications',
    ],
  },
  {
    icon: api,
    title: 'API Development',
    about: [
      'I can develop robust REST API using',
      <strong key={1}> Express and Ruby on Rails </strong>,
    ],
  },
  {
    icon: algo,
    title: 'Competitive Coder',
    about:
      'a daily problem solver, and a daily learner, always working on improving my understanding of programming and coding ',
  },
];

export default skills;
