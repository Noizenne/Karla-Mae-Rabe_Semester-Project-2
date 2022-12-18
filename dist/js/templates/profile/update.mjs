import { AUCTION_URL } from "../../api/constants.mjs";
import { getToken } from "../../api/auth/getToken.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles/";
const method = "put";

export async function updateAvatar(profileData) {
  const { name } = load("profile");
  if (!profileData.name) {
    console.log("Update requires a name.");
  }
  const UPDATE_URL = `${AUCTION_URL}${action}${name}/media`;

  const response = await getToken(UPDATE_URL, {
    method,
    body: JSON.stringify(profileData),
  });

  return await response.json();
}
