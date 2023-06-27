import { uploadPhoto, createUser } from "./utils";

async function asyncUploadUser() {
  let photo, user;

  const photoPromise = uploadPhoto().then(response => {
    photo = response;
  }).catch(error => {
    console.error('Error:', error);
  });

  const userPromise = createUser().then(response => {
    user = response;
  }).catch(error => {
    console.error('Error:', error);
  });

  await Promise.all([photoPromise, userPromise]);

  return {
    photo: photo || null,
    user: user || null
  };
}

export default asyncUploadUser;
