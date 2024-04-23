const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

function getUserDataFromLocalStorage() {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  if (storedUserData) {
      return storedUserData;
  } else {
      return null;
  }
}

function loginUser() {
  const storedUserData = getUserDataFromLocalStorage();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
      Swal.fire({
          title: "Login Successful!",
          icon: "success"
      }).then(() => {
          // Redirect to todos page
          window.location.href = "todos.html";
      });
  } else if (username === "" && password === "") {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter username and password."
      });
  } else {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Unsuccessful! Invalid username or password."
      });
  }
}


function saveUserDataToLocalStorage(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function signupUser() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  const email = document.getElementById('signupEmail').value;

  const userData = {
    username,
    password,
    email
  };
  saveUserDataToLocalStorage(userData);

  Swal.fire({
    title: "Successful! Registered",
    icon: "success"
  });

  // Redirect to the login page
  showLogin();
}
