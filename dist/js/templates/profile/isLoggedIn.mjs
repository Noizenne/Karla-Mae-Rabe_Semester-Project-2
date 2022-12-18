import { load } from "../../storage/index.mjs";

export async function loggedInName() {
  const loggedIn = load("profile");

  if (loggedIn) {
    const navLoggedIn = document.querySelector(".logged-in");
    const navNotLoggedIn = document.querySelector(".not-logged-in");

    navLoggedIn.classList.add("d-flex");
    navLoggedIn.classList.remove("d-none");

    navNotLoggedIn.classList.add("d-none");
    navNotLoggedIn.classList.remove("d-flex");

    document.querySelector("#plus").disabled = false;
  } else {
    document.querySelector("#plus").disabled = true;
  }
}
