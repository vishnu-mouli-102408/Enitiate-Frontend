"use server";

import { Posts, getImagesData } from "@/lib/helper";

// import { auth } from "@/lib/firebase";
// import { SigninSchemaTypes } from "@/lib/zodSchemas";
// import { signInWithEmailAndPassword } from "firebase/auth";

// interface FirebaseError extends Error {
//   code: string;
// }

// export const onSubmitForm = async (data: SigninSchemaTypes) => {
//   try {
//     const userCredentials = await signInWithEmailAndPassword(
//       auth,
//       data.email,
//       data.password
//     );
//     if (userCredentials) {
//       setUserState(userCredentials.user.uid);
//       //   localStorage.setItem("uid", userCredentials.user.uid);
//       //   localStorage.setItem("token", await userCredentials.user.getIdToken());
//     }
//   } catch (error) {
//     const firebaseError = error as FirebaseError;
//     if (firebaseError.code === "auth/invalid-credential") {
//       console.log(firebaseError.code);
//     } else {
//       console.log("Login Error", firebaseError.message);
//     }
//   }
// };

export const fetchPostsDataWithImages = async (limit: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    {
      cache: "force-cache",
    }
  );
  const data: Posts[] = await response.json();
  const imagesData = await getImagesData();
  const images = imagesData?.map((item) => item.urls);
  const newData = Array.from({ length: 4 }, () => images).flat();
  if (newData) {
    const postsDataWithImages = data.map((post, index) => ({
      ...post,
      imageUrl: newData[index],
    }));
    return postsDataWithImages;
  }
};

export const findPostById = async (id: string) => {
  const allPostsData = await fetchPostsDataWithImages(100);
  const requiredPost = allPostsData?.find((post) => post.id.toString() == id);
  return requiredPost;
};
