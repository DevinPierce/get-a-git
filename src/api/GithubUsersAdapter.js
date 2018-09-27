const APIURL = "https://api.github.com/users/"

export default class GithubUsersAdapter {

  static getUser = (userName) => {
    return fetch(APIURL + userName)
      .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
      .catch(err => {
        console.warn(`Error`, err);
        return null;
      });
  }

}
