import jeff from '../../assets/projects_images/jeff.png';
import football from '../../assets/projects_images/football.png';
import pc from '../../assets/projects_images/pc.png';
import vinyl from '../../assets/projects_images/vinyl.png';
import weather from '../../assets/projects_images/weather.png';

const data_projects = [
  {
    name: 'PC-parts',
    image: pc,
    deployed_url: 'https://pc-culture.netlify.app/',
    github_url: 'https://github.com/AryByt/PC-Culture',
    category: ['react.js', 'mongoDB', 'node.js'],
  },

  {
    name: 'Vinyl',
    image: vinyl,
    deployed_url: 'https://vinly-app.netlify.app/',
    github_url: 'https://github.com/AryByt/Vinly',
    category: ['node.js', 'mongoDB', 'react.js'],
  },
  {
    name: 'Are-Ya-Da-Football',
    image: football,
    deployed_url: 'https://sleepy-keller-6d7a40.netlify.app/',
    github_url: 'https://github.com/AryByt/Are-Ya-Da-Leagues',
    category: ['node.js', 'tailwind', 'react'],
  },
  {
    name: 'JeffHandyman',
    image: jeff,
    deployed_url: 'jeff-handyman.netlify.app',
    github_url: 'https://github.com/AryByt/Jafar-Handyman',
    category: ['node.js', 'react'],
  },
  {
    name: 'Are-Ya-Da-Weather',
    image: weather,
    deployed_url: 'https://arybyt.github.io/Are-Ya-Da-Weather/',
    github_url: 'https://github.com/AryByt/Are-Ya-Da-Weather',
    category: ['vanilla'],
  },
];

export default data_projects;
