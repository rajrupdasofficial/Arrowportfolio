import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { firebase_config } from "../../util/firebase";
export const uploadImageToFirebase = async (imageData,uniqueFilename) => {
  try {
    const storage = getStorage(firebase_config);
    const storageRef = ref(storage, `${uniqueFilename}`);

    // Upload the image to Firebase Storage
    await uploadBytes(storageRef, imageData);
  } catch (error) {
    console.error("Error uploading image to Firebase Storage:", error);
    throw error;
  }
};