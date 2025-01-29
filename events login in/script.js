const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  console.log({ emailValue, passwordValue });

  if (!emailValue.includes("@")) {
    errorMessage.textContent = "Please enter a valid email address";
  } else if (passwordValue.length < 6) {
    errorMessage.textContent = "6 simvol tupoi";
  } else {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful";
    window.location.href = "events.html";
  }
});
