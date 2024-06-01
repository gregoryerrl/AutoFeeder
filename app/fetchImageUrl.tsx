import { ref, getDownloadURL } from "@firebase/storage";
import { storage } from "./firebaseConfig";

const fetchImageUrl = async (path: string): Promise<string> => {
  const imageRef = ref(storage, path);
  const url = await getDownloadURL(imageRef);
  return url;
};

export default fetchImageUrl;
