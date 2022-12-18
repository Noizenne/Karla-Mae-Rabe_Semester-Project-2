import { save } from "../storage/index.mjs";
import { updateAvatar } from "../templates/profile/update.mjs";

export async function editAvatar() {
  const form = document.querySelector("#editAvatar-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      save("avatar", form.avatar.value);

      await updateAvatar(avatar);
      location.reload();
    });
  }
}
