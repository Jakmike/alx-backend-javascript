/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(firstName, lastName) {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      photo: null,
      user: null
    };
  }
}
