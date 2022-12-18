import { remove } from "../../storage/index.mjs";
/**
 * Will logout user and remove keys from localstorage.
 * @returns nothing and sends user to login page.
 */
export function logout() {
  remove("token");
  remove("profile");
  window.location.href = "/Treasures/login/index.html";
}
