import jeff from '../../assets/projects_images/jeff.png';
import football from '../../assets/projects_images/football.png';
import pc from '../../assets/projects_images/pc.png';
import vinyl from '../../assets/projects_images/vinyl.png';
import weather from '../../assets/projects_images/weather.png';
import pkdex from '../../assets/projects_images/pkedex.png';

const data_projects = [
  {
    name: 'Vinyl',
    image: vinyl,
    description:
      'Built a full-stack web app to allow users to view, buy, sell and add Vinyl records.Utilized: React, Ruby, Ruby on Rails,HTML,SQL and Tailwind ',
    deployed_url: 'https://vinly-app.netlify.app/',
    github_url: 'https://github.com/AryByt/Vinly',
    category: ['ruby on rails', 'react.js'],
  },
  {
    name: 'PC-parts',
    image: pc,
    description:
      'Built a full-stack web app alongside three other  developers to allow users to view, buy, sell and add computer parts.Utilized: React, MongoDB, Express, HTML and Tailwind.',
    deployed_url: 'https://pc-culture.netlify.app/',
    github_url: 'https://github.com/AryByt/PC-Culture',
    category: ['react.js', 'mongoDB'],
  },
  {
    name: 'JeffHandyman',
    image: jeff,
    description:
      'Built a full-stack web app made for my father, this application has all of the details about the work he does and has done and the services that he provides customers with! Utilized:React, Tailwind ',
    deployed_url: 'https://jeff-handyman.netlify.app/',
    github_url: 'https://github.com/AryByt/Jafar-Handyman',
    category: ['react.js', 'node.js'],
  },
  {
    name: 'Pokedex',
    image: pkdex,
    description:
      'First Class based component application, It is a small application where users are able to play a small pokemon game!',
    deployed_url: 'https://pkedex.netlify.app/',
    github_url: 'https://github.com/AryByt/Pkedex',
    category: ['react.js', 'node.js'],
  },
  {
    name: 'Are-Ya-Da-Leagues',
    image: football,
    description:
      'Built a full-stack web app to allow users to view, and add their favorite soccer teams and discuss everything soccer related.',
    deployed_url: 'https://sleepy-keller-6d7a40.netlify.app/',
    github_url: 'https://github.com/AryByt/Are-Ya-Da-Leagues',
    category: ['react.js', 'node.js'],
  },
  {
    name: 'Are-Ya-Da-Weather',
    image: weather,
    description:
      'This web app allows users to view and get the weather information in every city that is searched for. Utilized: Javascript, HTML/CSS',
    deployed_url: 'https://arybyt.github.io/Are-Ya-Da-Weather/',
    github_url: 'https://github.com/AryByt/Are-Ya-Da-Weather',
    category: ['vanilla', 'node.js'],
  },
];

export default data_projects;
