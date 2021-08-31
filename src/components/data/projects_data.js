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
    description: 'Looking for Vinyls? welcome! buy them sell them or just search around!',
    deployed_url: 'https://vinly-app.netlify.app/',
    github_url: 'https://github.com/AryByt/Vinly',
    category: ['ruby on rails', 'react.js'],
  },
  {
    name: 'PC-parts',
    image: pc,
    description: 'A group project, for anyone looking to purchase pc-parts!',
    deployed_url: 'https://pc-culture.netlify.app/',
    github_url: 'https://github.com/AryByt/PC-Culture',
    category: ['react.js', 'mongoDB'],
  },
  {
    name: 'JeffHandyman',
    image: jeff,
    description:
      'Website made for my father, this application has all of the details about the work he does and has done and the services that he provides customers with!',
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
    name: 'Are-Ya-Da-Football',
    image: football,
    description: 'Add your teams and discuss everything soccer! ',
    deployed_url: 'https://sleepy-keller-6d7a40.netlify.app/',
    github_url: 'https://github.com/AryByt/Are-Ya-Da-Leagues',
    category: ['react.js', 'node.js'],
  },
  {
    name: 'Are-Ya-Da-Weather',
    image: weather,
    description:
      'My first ever application. Users are able to get the weather information that they need!',
    deployed_url: 'https://arybyt.github.io/Are-Ya-Da-Weather/',
    github_url: 'https://github.com/AryByt/Are-Ya-Da-Weather',
    category: ['vanilla', 'node.js'],
  },
];

export default data_projects;
