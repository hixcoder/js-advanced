// make a request to get all users
function readUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users/");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      var i = 1;
      for (user of users) {
        document.getElementById("users-container").innerHTML += `
        <div class="user-item${i}" onclick="userClicked(${i}, this)">
          <h4 id="user-item-name">${user.name}</h4>
          <p id="user-item-email">${user.email}</p>
        </div>
       `;
        i++;
      }
    } else {
      alert("Error");
    }
  };
}

// make a request to get all post of a specific user

function readUserPosts(UserId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/users/${UserId}/posts`
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.getElementById("posts-container").innerHTML = "";
      for (post of posts) {
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
    } else {
      alert("Error");
    }
  };
}

readUsers();
readUserPosts(1);
