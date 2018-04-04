const fetch = require('node-fetch');

let fetchGithubUser = async endpoint => {
  const url = `https://api.github.com${endpoint}`;

  const response = await fetch(url);
  return await response.json();
};

let showUserAndRepo = async handler => {
  // rans sequentially, this will have a performance issue
  /* const user = await fetchGithubUser(`/users/${handler}`);
  const repos = await fetchGithubUser(`/users/${handler}/repos`); */

  // the code below rans concurrently, boosts performance
  const userPromise = fetchGithubUser(`/users/${handler}`);
  const reposPromise = fetchGithubUser(`/users/${handler}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log({ user });
  console.log(repos.length);
};

showUserAndRepo('boochoo');
