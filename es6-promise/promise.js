const fetch = require('node-fetch');

let fetchGithubUser = handler => {
  const url = `https://api.github.com/users/${handler}`;

  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user);
      // console.log(user.location);
    });
};

fetchGithubUser('boochoo');
