require('dotenv').config();
const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

const projectRoot = path.resolve(__dirname, '../');
const publicRoot = path.resolve(projectRoot, 'public');
const publicPath = file => path.resolve(publicRoot, file);

const { REACT_APP_API_ENDPOINT } = process.env;

if (!REACT_APP_API_ENDPOINT) {
  console.error('You have to specify REACT_APP_API_ENDPOINT environment variable in order to run this script.');
  process.exit(1);
}

const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
};

const fetchMonsterByID = monsterID => (
  fetch(`${REACT_APP_API_ENDPOINT}/monsters/${monsterID}.json`, OPTIONS)
    .then(result => result.json())
    .then((monster) => {
      fs.writeFile(publicPath(`data/monsters/${monsterID}.json`), JSON.stringify(monster), (err) => {
        if (err) {
          console.log(err);
          console.error(`Error writing ${monsterID}.json file.`);
        } else {
          console.log(`Monsters ${monster.name} successfully parsed!`);
        }
      });
    })
    .catch((err) => {
      console.error(err);
      console.error('Error requesting the endpoint.');
    })
);

fetch(`${REACT_APP_API_ENDPOINT}/monster-index.json`, OPTIONS)
  .then(result => result.json())
  .then((monsters) => {
    fs.writeFile(publicPath('data/monsters/monsters.json'), JSON.stringify(monsters), (err) => {
      if (err) {
        console.log(err);
        console.error('Error writing monsters.json file.');
      } else {
        console.log('Monsters successfully parsed!');
      }
    });

    monsters.forEach(monster => fetchMonsterByID(monster.slug));
  })
  .catch((err) => {
    console.error(err);
    console.error('Error requesting the endpoint.');
  });
