const fetch = require('node-fetch');

class GitHubAPiClient {
  async fetchUser(handler) {
    const url = `https://api.github.com/users/${handler}`;

    const response = await fetch(url);

    return await response.json();
  }
}

(async () => {
  const client = new GitHubAPiClient();
  const user = await client.fetchUser('boochoo');

  console.log(user);
})();
