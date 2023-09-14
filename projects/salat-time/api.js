// make a request to get all users
function readUsers() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let usersJson = response.data;
        console.log(usersJson);
        var i = 1;
        for (user of usersJson) {
          document.getElementById("users-container").innerHTML += `
          <div class="user-item${i}" onclick="userClicked(${i}, this)">
            <h4 id="user-item-name">${user.name}</h4>
            <p id="user-item-email">${user.email}</p>
          </div>
         `;
          i++;
        }
        resolve();
      })
      .catch((error) => {
        reject();
      });
  });
}

// make a request to get all post of a specific user
function readUserPosts(UserId) {
  console.log("userid: " + UserId);
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${UserId}/posts`)
    .then((response) => {
      let postsJson = response.data;
      console.log(postsJson);
      document.getElementById("posts-container").innerHTML = "";
      for (post of postsJson) {
        document.getElementById("posts-container").innerHTML += `
        <div class="post-item">
        <h4>${post.title}</h4>
        <hr />
        <p>
        ${post.body}
        </p>
      </div>
       `;
      }
    })
    .catch((error) => {
      alert(error);
    });
}

readUsers()
  .then(() => {
    readUserPosts(1);
  })
  .catch((error) => {
    console.log("Error: " + error);
    alert(error);
  });
