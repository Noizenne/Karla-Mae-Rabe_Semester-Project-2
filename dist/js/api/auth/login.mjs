import { AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * Will login user from API results.
 * @param {object} profile
 */
const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = `${AUCTION_URL}${action}`;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if (response.ok) {
    const profile = await response.json();
    storage.save("token", profile.accessToken);
    storage.save("profile", profile);
    window.location.href = `/Treasures/profile/index.html?name=${profile.name}`;
    return profile;
  }

  throw new Error(response.statusText);
}
