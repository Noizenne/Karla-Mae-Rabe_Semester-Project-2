import { getProfile } from "../../api/profiles/index.mjs";

export function templateProfilePageInfo(profileData) {
  const section = document.createElement("div");
  section.classList.add("profile");
  section.innerHTML = `<div class="profileAvatar m-2 d-flex justify-content-center row">
  <img class="d-flex justify-content-center" style="width:200px;" src="${profileData.avatar}" alt="Profile image"></img>
  <div class="btn m-2" style="border:none; color:#0000FF;" onclick="location.href = '/Treasures/profile/edit.html'">Edit avatar</div>
  </div> 
  <div class="profileDetails">
  <p>Name: ${profileData.name}</p>
  <p>Email: ${profileData.email}</p>
  <p>Credits: ${profileData.credits}</p>
  <p>Listings: ${profileData._count.listings}</p>
  </div>`;

  return section;
}

export function renderProfilePageInfo(profileData, parent) {
  parent.append(templateProfilePageInfo(profileData));
}

export async function profileTemplate() {
  const profile = await getProfile();

  const container = document.querySelector(".profileInfo");
  renderProfilePageInfo(profile, container);
}
