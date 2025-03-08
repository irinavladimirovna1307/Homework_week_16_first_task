const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");

function validateField(input, regex, errorMsg) {
  const errorDiv = document.getElementById(input.id + "Error");
  if (!regex.test(input.value)) {
    errorDiv.textContent = errorMsg;
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
}

function checkFormValidity() {
  submitBtn.disabled = !form.checkValidity();
}

form.addEventListener("input", checkFormValidity);
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isValidName = validateField(
    document.getElementById("name"),
    /^[a-zA-Zа-яА-Я ]{2,20}$/,
    "Имя должно содержать только буквы и быть от 2 до 20 символов"
  );
  const isValidEmail = validateField(
    document.getElementById("email"),
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Некорректный email"
  );
  const isValidAge = validateField(
    document.getElementById("age"),
    /^[0-9]+$/,
    "Введите корректный возраст"
  );
  const isValidPassword = validateField(
    document.getElementById("password"),
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "Пароль должен содержать минимум 8 символов, одну заглавную, одну строчную букву и цифру"
  );
  const isChecked = document.getElementById("agreement").checked;
  document.getElementById("agreementError").textContent = isChecked
    ? ""
    : "Вы должны согласиться с условиями";

  if (
    isValidName &&
    isValidEmail &&
    isValidAge &&
    isValidPassword &&
    isChecked
  ) {
    console.log("Форма успешно отправлена");
    form.reset();
    checkFormValidity();
  }
});
