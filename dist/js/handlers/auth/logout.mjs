import { logout } from "../../api/auth/logout.mjs";

export function logoutListener() {
  const logoutBtn = document.querySelector("#logout");

  logoutBtn.addEventListener("click", () => {
    logout();
  });
}
