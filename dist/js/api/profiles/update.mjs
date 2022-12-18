import { AUCTION_URL } from "../constants.mjs";
import { profile } from "../auth/state.mjs";

const method = "put";
/**
 * Will take in the avatar and id from user input
 * 
 * @param {*} avatar
 * @param {*} id
 * @returns new avatar url
 */
export async function updateProfileAvatar(avatar, id) {
  const me = profile();

  const response = await fetch(`${AUCTION_URL}/profiles/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify({ ...me, avatar }),
  });
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
