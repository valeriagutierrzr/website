document
.querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });

  const button = document.getElementById("miboton")
button.addEventListener("click", handleClick)
function handleClick() {
	alert("¡Haz hecho click en el boton!")
}
const form = document.getElementById("myform");
form.addEventListener('submit', function (event) {
	event.preventDefault();
	validateForm();
})
function validateEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
	return regex.test(email)
}
function validateForm() {
	const emailInput = document.getElementById('email');
	const email = emailInput.value;
}


