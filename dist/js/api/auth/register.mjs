import { AUCTION_URL } from "../constants.mjs";
/**
 * Will register user and save results to API.
 * @param {object} profile
 */
const action = "/auth/register";
const method = "post";

export async function register(profile) {

  const registerURL = `${AUCTION_URL}${action}`;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const successReg = document.querySelector(".success");

  if (response.ok) {
    successReg.innerText = "You can now login."
    return await response.json();
  }
  throw new Error(response.statusText);
}
