import { createApi } from "unsplash-js";

export type UrlTypes = {
  raw: string;
  full: string;
  regular: string;
  small: string;
};
export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl?: UrlTypes;
};

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
});

export function getImagesData() {
  const data = api.search
    .getPhotos({ query: "cat", page: 2, perPage: 100 })
    .then((result) => {
      return result.response?.results;
    })
    .catch((err) => {
      console.log("Error Occured while Fetching", err);
    });
  return data;
}
