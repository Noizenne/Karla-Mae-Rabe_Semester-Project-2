import { AUCTION_URL } from "../constants.mjs";
import { getToken } from "../auth/getToken.mjs";
import { loggedInName } from "../../templates/index.mjs";
const action = "/listings";
const method = "post";

// Create listing
/**
 * Will take in the listingData from user inputs
 * @param {*} listingData 
 * @returns the post
 */

export async function createListing(listingData) {
  const CREATE_POST_URL = `${AUCTION_URL}${action}`;

  const response = await getToken(CREATE_POST_URL, {
    method,
    body: JSON.stringify(listingData),
  });

  if (response.ok) {
    console.log("Post success.");
  }

  return await response.json();
}

// Bid on entry
/**
 * Will take in the id and amount from user inputs
 * @param {number} amount
 * @param {*} id
 * @returns the set bid
 */

export async function postBid(id, amount) {
  const CREATE_BID_URL = `${AUCTION_URL}${action}/${id}/bids`;

  const response = await getToken(CREATE_BID_URL, {
    method,
    body: JSON.stringify({ amount: amount }),
  });

  const bidError = document.querySelector(".bidError");

  if (response.ok) {
    console.log("Success");
    await loggedInName();
    history.back();
    return await response.json();
  } else {
    bidError.innerHTML = "You must login to place a bid.";
  }

  throw new Error(response);
}
