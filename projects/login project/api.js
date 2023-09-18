function createNewUser() {
  let token = localStorage.getItem("token");
  let config = {
    header: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(
      "https://reqres.in/api/users",
      {
        name: "morpheus",
        job: "leader",
      },
      config
    )
    .then(function (response) {
      token = response.data.token;
      console.log(response.data);
    });
}

function login() {
  axios
    .post("https://reqres.in/api/login", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    })
    .then(function (response) {
      let token = response.data.token;
      localStorage.setItem("token", token);

      console.log("token recieved: " + token);
      window.location.href = "./homePage.html";
      // createNewUser();
    })
    .catch(function (error) {
      alert(error.response.data.error);
    });
}
