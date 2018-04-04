const fetch = require('node-fetch');

let fetchGithubUser = async endpoint => {
  const url = `https://api.github.com${endpoint}`;

  const response = await fetch(url);
  return await response.json();
};

let showUserAndRepo = async handler => {
  const [user, repos] = await Promise.all([
    fetchGithubUser(`/users/${handler}`),
    fetchGithubUser(`/users/${handler}/repos`),
  ]);

  console.log(user.name);
  console.log(repos.length);
};

showUserAndRepo('boochoo');
