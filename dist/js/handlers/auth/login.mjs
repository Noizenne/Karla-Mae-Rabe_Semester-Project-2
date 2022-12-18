import { login } from "../../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log("Logged In");
    console.log(profile);
    login(profile);
  });
}
