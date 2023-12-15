"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Link from "next/link";

const Banner = ({
  buttonText,
  title,
  desc,
}: {
  buttonText: string;
  title: string;
  desc: string;
}) => {
  const router = useRouter();
  function deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  function handleLogout() {
    deleteCookie("uid");
    router.push("/login");
  }

  let titleText = title.split(" ");
  return (
    <div className="flex flex-col justify-center items-start p-12">
      <h1 className="pt-4">
        <span className="pr-2 text-3xl font-bold">{titleText[0]}</span>
        <span className="text-orange-600 text-3xl font-bold">
          {titleText[1]}
        </span>
      </h1>
      <p className="py-4 text-lg">{desc}</p>
      <div>
        <Button buttonText={buttonText} />
        <button
          type="button"
          onClick={handleLogout}
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Link href="/login">Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
