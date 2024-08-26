const users = [
  {
    id: 1,
    email: "emi@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    email: "juan@gmail.com",
    password: "123456",
  },
];

const userLogged = JSON.parse(localStorage.getItem("user"));

const login = document.getElementById("login");
const form = document.getElementById("login-form");
const profile = document.getElementById("profile");
const logout = document.getElementById("logout");

login.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    return alert("Por favor, rellena todos los campos");
  }

  const user = users.find((u) => u.email === email);

  if (!user) {
    return alert("Email no registrado");
  }

  if (user.password !== password) {
    return alert("Contraseña incorrecta");
  }

  form.style.display = "none";

  profile.style.display = "block";

  localStorage.setItem("user", JSON.stringify(user));

  const userElement = document.getElementById("user");
  userElement.innerText = user.email;
});

logout.addEventListener("click", (event) => {
  event.preventDefault();
  form.style.display = "block";
  profile.style.display = "none";

  localStorage.removeItem("user");
});

function showProfile() {
  if (userLogged) {
    form.style.display = "none";
    profile.style.display = "block";

    const userElement = document.getElementById("user");
    userElement.innerText = userLogged.email;
  } else {
    form.style.display = "block";
    profile.style.display = "none";
  }
}

showProfile();
