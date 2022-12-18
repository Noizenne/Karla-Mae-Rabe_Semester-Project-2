import { getUser } from "../../api/profiles/index.mjs";

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const name = searchParams.get("name");

export function templateUserPageInfo(profileData) {
  const section = document.createElement("div");
  section.classList.add("profile");
  section.innerHTML = `<div class="profileAvatar m-2 d-flex justify-content-center row">
  <img class="d-flex justify-content-center" style="width:200px;" src="${profileData.avatar}" alt="Profile image"></img>
  </div> 
  <div class="profileDetails">
  <p>Name: ${profileData.name}</p>
  <p>Email: ${profileData.email}</p>
  <p>Credits: ${profileData.credits}</p>
  </div>`;

  return section;
}

export function renderUserPageInfo(profileData, parent) {
  parent.append(templateUserPageInfo(profileData));
}

export async function userTemplate() {
  const profile = await getUser(name);

  const container = document.querySelector(".userInfo");
  renderUserPageInfo(profile, container);
}
