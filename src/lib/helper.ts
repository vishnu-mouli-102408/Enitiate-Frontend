import { userState } from "@/store/userState";
import { useRecoilValue } from "recoil";

export const user = useRecoilValue(userState);
