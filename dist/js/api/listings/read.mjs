import { AUCTION_URL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";
import { getToken } from "../auth/getToken.mjs";

const loader = document.querySelector(".loader");
const action = "/listings";

/**
 * Will get the gem listings from API
 * 
 * @param {*} listingData 
 * @returns gem tag listings
 */
export async function getListings() {
  const response = await fetch(`${AUCTION_URL}${action}?_tag=gem`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    loader.classList.remove("loader");
    return await response.json();
  }
  throw new Error(response.statusText);
}

/**
 * Will get the gem listings with a limit of 8 from API
 * 
 * @param {*} listingData 
 * @returns 8 gem tag listings
 */
export async function getListingsLimited() {
  const response = await fetch(`${AUCTION_URL}${action}?_tag=gem&limit=8`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    loader.classList.remove("loader");
    return await response.json();
  }
  throw new Error(response.statusText);
}

/**
 * Will get a single listing from API based on id
 * 
 * @param {*} id
 * @returns one single listings from resuls
 */
export async function getListing(id = window.location.search) {
  const response = await fetch(
    `${AUCTION_URL}${action}/${id}?_seller=true&_bids=true`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    loader.classList.remove("loader");
  }

  if (!id) {
    console.log("Get requires an id.");
  }
  return await response.json();
}

/**
 * Will get listings from profile based on name
 * 
 * @param {string} name
 * @returns listings from profile
 */
export async function getListingsFromProfile(name = load("profile").name) {
  const token = load("token");

  const response = await getToken(`${AUCTION_URL}/profiles/${name}/listings`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    loader.classList.remove("loader");
  }

  if (!name) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

/**
 * Will get listings from user from API based on name
 * 
 * @param {string} name
 * @returns listings from user
 */
export async function getListingsFromUser(name) {
  const token = load("token");

  const response = await getToken(`${AUCTION_URL}/profiles/${name}/listings`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    loader.classList.remove("loader");
  }

  if (!name) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
