const fetch = require('node-fetch');

let fetchGithubUser = async handler => {
  const url = `https://api.github.com/users/${handler}`;

  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

// IFEE async
/* (async () => {
  const user = await fetchGithubUser('boochasdfasdfoo')
    .then(user => {
      console.log(user);
    })
    .catch(err => {
      console.log(`Error: ${err.message}`);
    });
})(); */

// with just try and catch
async function showGitHubUser(handler) {
  try {
    const user = await fetchGithubUser(handler);
    console.log(user);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

showGitHubUser('boochoo');
