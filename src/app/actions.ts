"use server";

import { auth } from "@/lib/firebase";
import { SigninSchemaTypes } from "@/lib/zodSchemas";
import { userState } from "@/store/userState";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSetRecoilState } from "recoil";

interface FirebaseError extends Error {
  code: string;
}

const setUserState = useSetRecoilState(userState);

export const onSubmitForm = async (data: SigninSchemaTypes) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    if (userCredentials) {
      setUserState(userCredentials.user.uid);
      //   localStorage.setItem("uid", userCredentials.user.uid);
      //   localStorage.setItem("token", await userCredentials.user.getIdToken());
    }
  } catch (error) {
    const firebaseError = error as FirebaseError;
    if (firebaseError.code === "auth/invalid-credential") {
      console.log(firebaseError.code);
    } else {
      console.log("Login Error", firebaseError.message);
    }
  }
};
